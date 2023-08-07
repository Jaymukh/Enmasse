import '../../../styles/mapcontainer/map/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Source, Layer, GeolocateControl } from 'react-map-gl';
import Map from 'react-map-gl';
// import features from '../../../geojson/countries/IND.geo.json';
import axios from 'axios';
//import SideBar from '../../SideBar'
import * as Constants from '../../../utils/constants/Constants';

function GlobalMap(
	{ features, handleImportFeature }
	) {

	const TOKEN = Constants.TOKEN;
	const localMapStyle = Constants.localMapStyle;
	const API_KEY = Constants.API_KEY;
	const revgeocodeURL = Constants.revgeocodeURL;
	const [address, setAddress] = useState('');
	const [newPlace, setNewPlace] = useState({
		latitude: 20.5937,
		longitude: 78.9629,
	});
	const [viewport, setViewport] = useState({
		latitude: 20.5937,
		longitude: 78.9629,
		zoom: 1,
	});
	const [paint, setPaint] = useState({
		'fill-color': '#FFFFFF',
		'fill-opacity': 1,
	});

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

	const handleMapClick = (e) => {
		const longitude = e.lngLat.lng;
		const latitude = e.lngLat.lat;
		setNewPlace({
			latitude: latitude,
			longitude: longitude,
		});
		setPaint({ 'fill-color': '#108041', 'fill-opacity': 1 });
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

	const fetchData = async () => {
		try {
			const response = await axios.get(
				revgeocodeURL +
				newPlace.latitude +
				',' +
				newPlace.longitude +
				'&lang=en-US&apiKey=' +
				API_KEY
			);
			if (response.data.items.length) {
				const address = response.data.items[0].address;
				setAddress(address);
				handleImportFeature(address.countryCode);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};	

	useEffect(() => {
		fetchData();
	}, [newPlace.latitude, newPlace.longitude]);

	return (
		<div
			className='MapContainer row'
			style={{ height: '80vh', width: '100vw', zIndex: 999 }}
		>
			<Map
				{...viewport}
				width='100%'
				height='100%'
				projection={{
					name: 'mercator',
				}}
				mapboxAccessToken={TOKEN}
				transitionDuration='200'
				mapStyle={localMapStyle}
				onViewportChange={(viewport) => setViewport(viewport)}
				onDblClick={handleDoubleClick}
				onClick={handleMapClick}
				//onWheel={handleMapScroll}
				attributionControl={true}
				doubleClickZoom={true}
			>
				<Source id='geojsonsource' type='geojson' data={features} />
				<Layer
					type='fill'
					source='geojsonsource'
					paint={paint}
				/>
				{/* <SideBar /> */}
			</Map>
		</div>
	);
}

export default GlobalMap;
