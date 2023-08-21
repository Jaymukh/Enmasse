import '../../../styles/mapcontainer/map/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState, useRef, useCallback  } from 'react';
import Map, { Popup } from 'react-map-gl';
import bbox from '@turf/bbox';
import CoreSolutions from './CoreSolutions';
import * as Constants from '../../../utils/constants/Constants';
import MapPopup from './MapPopup';
import MapFillLayer from './MapFillLayer';
import MapCircleLayer from './MapCircleLayer';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import * as MapConstants from '../../../utils/json/googlemapstyle';

function NonGlobalMap({ features, handleImportFeature, countryCode, selectedCountry, selectedState, selectedDistrict, pointFeatures }) {
	const center = {
		lat: 20.5937,
		lng: 78.9629
	};

	const mapOptions = {
		disableDefaultUI: true, // Disables default UI, including zoom buttons
		zoomControl: false, // Disables only the zoom control (zoom buttons)
		styles: MapConstants.NonGlobalMapStyle
	};

	const TOKEN = Constants.TOKEN;
	const transparentMapStyleV2 = Constants.transparentMapStyleV2;

	const mapContainerRef = useRef(null);
	const [viewStories, setViewStories] = useState(false);
	const [selectedRb, setSelectedRb] = useState(0);
	const [newPlace, setNewPlace] = useState({
		latitude: 20.5937,
		longitude: 78.9629,
	});
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
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
		if (feature) {
			const { properties, geometry } = feature;
			setHoverInfo({
				latitude,
				longitude,
				properties: properties,
			});
		}
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


	const handleHoverEnd = () => {
		setHoverInfo(null);
	};

	const handleViewStories = (checked) => {
		setViewStories(checked);
	}

	const handleChangeRb = (event) => {
		setSelectedRb(Number(event.target.value));
	};

	const calculateZoom = (width, height) => {
		const minDimension = Math.min(width, height);
		const zoom = Math.log2(minDimension / 512) + 1;
		return Math.round(zoom);
	};

	const resetViewPort = () => {
		const mapContainer = mapContainerRef.current;
		if (features && mapContainer) {
			const { clientWidth, clientHeight } = mapContainer;

			const bounds = bbox(features);
			const [minLng, minLat, maxLng, maxLat] = bounds;

			const centerLng = (maxLng + minLng) / 2;
			const centerLat = (maxLat + minLat) / 2;

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
			});
		}
	};

	const handleAutoZoom = () => {
		const mapContainer = mapContainerRef.current;
		if (features && mapContainer) {
			const { clientWidth, clientHeight } = mapContainer;
			const bounds = bbox(features);

			const [minLng, minLat, maxLng, maxLat] = bounds;

			const longitude = (minLng + maxLng) / 2;
			const latitude = (minLat + maxLat) / 2;
			const zoom = getZoomForBounds(clientWidth, clientHeight, bounds);

			setViewport({
				...viewport,
				longitude,
				latitude,
				zoom,
				transitionDuration: 1000,
			});
		}
	};

	const getZoomForBounds = (clientWidth, clientHeight, bounds) => {
		const lngDiff = bounds[2] - bounds[0];
		const latDiff = bounds[3] - bounds[1];
		const height = (clientHeight * 80) / 100;
		const horizontalPadding = 100;
		const verticalPadding = 120;
		const zoomLng = Math.log2((clientWidth - horizontalPadding) / lngDiff);
		const zoomLat = Math.log2((height - verticalPadding) / latDiff);
		return Math.min(zoomLng, zoomLat);
	};

	useEffect(() => {
		handleImportFeature();
	}, [selectedCountry, selectedState, selectedDistrict]);

	useEffect(() => {
		// resetViewPort();
		handleAutoZoom();
	}, [features])

	const storyFeatures = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [77.11790108415168, 28.643326173465816],
				},
				properties: {
					radius: 15,
					id: 1,
					family: "5 Family members",
					annualSpend: '$6000',
					image: 'https://s3.ap-south-1.amazonaws.com/kronos-new-tarento/1/userprofile/1841/1657528681838_Ameya%20Shetty.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230807T085110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAS2D3QDFYXIAJ2TAB%2F20230807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fe32f142787a47fdf38bb6b994d0ac3882c862ffb42bcf2c6fa3e3d95f39d059'
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [80.25064909780843, 15.886294542878717],
				},
				properties: {
					radius: 15,
					id: 1,
					family: "3 Family members",
					annualSpend: '$3000',
					image: 'https://s3.ap-south-1.amazonaws.com/kronos-new-tarento/1/userprofile/1841/1657528681838_Ameya%20Shetty.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230807T085110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAS2D3QDFYXIAJ2TAB%2F20230807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fe32f142787a47fdf38bb6b994d0ac3882c862ffb42bcf2c6fa3e3d95f39d059'
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [76.51049281262189, 14.956060982956439],
				},
				properties: {
					radius: 15,
					id: 1,
					family: "6 Family members",
					annualSpend: '$6000',
					image: 'https://s3.ap-south-1.amazonaws.com/kronos-new-tarento/1/userprofile/1841/1657528681838_Ameya%20Shetty.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230807T085110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAS2D3QDFYXIAJ2TAB%2F20230807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fe32f142787a47fdf38bb6b994d0ac3882c862ffb42bcf2c6fa3e3d95f39d059'
				},
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [83.92233007923814, 20.161197887069193],
				},
				properties: {
					radius: 15,
					id: 1,
					family: "3 Family members",
					annualSpend: '$5000',
					image: 'https://s3.ap-south-1.amazonaws.com/kronos-new-tarento/1/userprofile/1841/1657528681838_Ameya%20Shetty.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230807T085110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAS2D3QDFYXIAJ2TAB%2F20230807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fe32f142787a47fdf38bb6b994d0ac3882c862ffb42bcf2c6fa3e3d95f39d059'
				},
			}
		],
	};

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		setMap(map);
		map.data.addGeoJson(features);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return (
		<div
			className='row'
			style={{ height: '81vh', width: '100vw', zIndex: 999 }}
			ref={mapContainerRef}
		>
			<Map
				{...viewport}
				mapboxAccessToken={TOKEN}
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
				<MapFillLayer features={features} />

				<MapCircleLayer selected={selectedRb} type='radius-all' features={pointFeatures} properties={Constants.collectiveCircleLayerProps} />

				{selectedRb === 1 && <MapCircleLayer selected={selectedRb} type='radius-edu' features={pointFeatures} properties={Constants.coreSolutionCircleLayerProps} />}
				{selectedRb === 2 && <MapCircleLayer selected={selectedRb} type='radius-agri' features={pointFeatures} properties={Constants.coreSolutionCircleLayerProps} />}
				{selectedRb === 3 && <MapCircleLayer selected={selectedRb} type='radius-health' features={pointFeatures} properties={Constants.coreSolutionCircleLayerProps} />}
				{selectedRb === 4 && <MapCircleLayer selected={selectedRb} type='radius-fin' features={pointFeatures} properties={Constants.coreSolutionCircleLayerProps} />}

				{storyFeatures && viewStories && (
					storyFeatures.features.map((feature, index) => (
						<Popup
							latitude={feature.geometry.coordinates[1]}
							longitude={feature.geometry.coordinates[0]}
							onClose={handleHoverEnd}
							closeOnClick={false}
							closeButton={false}
						>
							<MapPopup
								properties={feature.properties}
							/>
						</Popup>
					))
				)}
			</Map>

			{/* {pointFeatures && (
					pointFeatures.features.map((feature, index) => (
						<Marker
							key={index}
							latitude={feature.geometry.coordinates[1]}
							longitude={feature.geometry.coordinates[0]}
						>
						</Marker>
					))
				)}*/}
			{/* <LoadScript googleMapsApiKey="AIzaSyBS2A07XHOScEqDgy9d3iKhGSb1IfHQnkE">
				<GoogleMap mapContainerStyle={MapConstants.containerStyle} center={center} zoom={1.5} options={mapOptions} onClick={handleMapClick} >
					
				</GoogleMap>
			</LoadScript> */}
			{/* <LoadScript
				googleMapsApiKey='AIzaSyBS2A07XHOScEqDgy9d3iKhGSb1IfHQnkE'
				language="en"
				region="us"
				libraries={["drawing", "visualization", "geometry", "places"]}
			>
				<GoogleMap
					mapContainerClassName="App-map"
					zoom={12}
					version="weekly"
					on
					mapContainerStyle={MapConstants.containerStyle}
					center={center}
					onLoad={onLoad}
					onUnmount={onUnmount}
				></GoogleMap>
			</LoadScript> */}
			<CoreSolutions handleViewStories={handleViewStories} handleChangeRb={handleChangeRb} selectedRb={selectedRb} />
		</div>
	);
}

export default NonGlobalMap;
