import '../../../styles/mapcontainer/map/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState, useRef } from 'react';
import Map, { Source, Layer, Marker, Popup } from 'react-map-gl';
import bbox from '@turf/bbox';
import CoreSolutions from './CoreSolutions';

import * as Constants from '../../../utils/constants/Constants';
import MapPopup from './MapPopup';

function NonGlobalMap({ features, handleImportFeature, countryCode, selectedCountry, selectedState, selectedDistrict, pointFeatures }) {
	const TOKEN = Constants.TOKEN;
	const transparentMapStyleV2 = Constants.transparentMapStyleV2;

	const mapContainerRef = useRef(null);
	const [newPlace, setNewPlace] = useState({
		latitude: 20.5937,
		longitude: 78.9629,
	});
	const [viewport, setViewport] = useState({
		latitude: 20.5937,
		longitude: 78.9629,
		zoom: 2,
	});

	const [hoverInfo, setHoverInfo] = useState(null);

	const handleMapClick = (e) => {
		const longitude = e.lngLat.lng;
		const latitude = e.lngLat.lat;
		setNewPlace({
			latitude: latitude,
			longitude: longitude,
		});
		const feature = e.features[0];
		const { properties, geometry } = feature;
		setHoverInfo({
			latitude,
			longitude,
			properties: properties,
		});
	};

	const handleDoubleClick = (e) => {
		e.preventDefault();
		const longitude = e.lngLat.lng;
		const latitude = e.lngLat.lat;
		const zoom = Math.min(viewport.zoom + 1, 20);
		setViewport({
			latitude: latitude,
			longitude: longitude,
			zoom: zoom
		});
	};

	const handleMapScroll = (e) => {
		e.preventDefault();
		const deltaY = e.originalEvent.deltaY;
		const zoom = viewport.zoom;
		if (deltaY > 0) {
			var newZoom = Math.max(1, viewport.zoom - 1);;
		} else {
			var newZoom = Math.min(zoom + 1, 20);;
		}
		setViewport({
			latitude: viewport.latitude,
			longitude: viewport.longitude,
			zoom: newZoom
		});
	};

	const resetViewPort = () => {
		if (features) {
			const bounds = bbox(features); // Calculate the bounding box of the GeoJSON features
			const [minLng, minLat, maxLng, maxLat] = bounds; // Extract the bounding box values

			// Calculate the center of the bounding box
			const centerLng = (maxLng + minLng) / 2;
			const centerLat = (maxLat + minLat) / 2;
			//const bound = new WebMercatorViewport(viewport).fitBounds(bounds);

			if (selectedDistrict) {
				var newZoom = 7.5;
			} else if (selectedState) {
				var newZoom = 5.5;
			} else {
				var newZoom = 3.2;
			}
			setViewport({
				latitude: centerLat,
				longitude: centerLng,
				zoom: newZoom
				//zoom: getZoom(minLng, minLat, maxLng, maxLat, 1350, 750),
			});
		}
	};

	const handleFeatureHover = (event) => {
		const feature = event.features[0];
		const { properties, geometry } = feature;
		const [longitude, latitude] = geometry.coordinates;
		setHoverInfo({ latitude, longitude, properties });
	};

	const handleHoverEnd = () => {
		setHoverInfo(null);
	};

	useEffect(() => {
		handleImportFeature();
	}, [selectedCountry, selectedState, selectedDistrict]);

	useEffect(() => {
		resetViewPort();
	}, [features])

	const circleFeatures = {
		type: 'FeatureCollection',
		features: [{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [95.02293978104811, 27.75356495721335],
			},
			properties: {
				radius: 10,
				id: 1,
			},
		}],
	};

	return (
		<div
			className='row'
			style={{ height: '80vh', width: '100vw', zIndex: 999 }}
			ref={mapContainerRef}
		>
			<Map
				{...viewport}
				mapboxAccessToken={TOKEN}
				width='100%'
				height='100%'
				transitionDuration='200'
				mapStyle={transparentMapStyleV2}
				projection={{
					name: 'mercator',
				}}
				onViewportChange={(viewport) => setViewport(viewport)}
				onClick={(e) => handleMapClick(e)}
				attributionControl={false}
				//boxZoom={true}
				interactiveLayerIds={['map-fill-layer']}				
			>
				<Source id='geojsonsource-fill' type='geojson' data={features} />
				<Layer
					id='map-fill-layer'
					type='fill'
					source='geojsonsource-fill'
					paint={{
						'fill-color': ['case',
							['<=', ['get', 'population'], 100000], '#D4E2DB',
							['<=', ['get', 'population'], 5000000], '#83BFA1',
							['<=', ['get', 'population'], 10000000], '#429C6B',
							['<=', ['get', 'population'], 50000000], '#108041',
							'#108041'],
						'fill-opacity': 0.7
					}}
				/>
				<Source id="geojsonsource-circle" type="geojson" data={pointFeatures} />
				<Layer
					id='map-circle-layer'
					type='circle'
					source='geojsonsource-circle'
					paint={{
						'circle-radius': ['get', 'radius'],
						'circle-color': '#A1CEB5',
						'circle-opacity': 1,
					}}
				/>
				{/* {pointFeatures && (
					pointFeatures.features.map((feature, index) => (
						<Marker
							key={index}
							latitude={feature.geometry.coordinates[1]}
							longitude={feature.geometry.coordinates[0]}
						>
						</Marker>
					))
				)} */}
				{hoverInfo && (
					<Popup
						latitude={hoverInfo.latitude}
						longitude={hoverInfo.longitude}
						onClose={handleHoverEnd}
						closeOnClick={false}
						closeButton={false}
					>
						<MapPopup
							name={hoverInfo.properties.name}
							population={hoverInfo.properties.population}
						/>
					</Popup>
				)}
				{/* {pointFeatures && (pointFeatures.features.map(item => (
					<Popup
						latitude={item.geometry.coordinates[1]}
						longitude={item.geometry.coordinates[0]}
						onClose={handleHoverEnd}
						closeOnClick={false}
					>
						<div>
							<h6>{item.properties.name}</h6>
							<p>Population - {item.properties.population}</p>
						</div>
					</Popup>
				)))} */}
				<CoreSolutions />
			</Map>
		</div>
	);
}

export default NonGlobalMap;
