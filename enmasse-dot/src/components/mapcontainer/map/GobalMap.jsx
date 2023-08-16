import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import * as Constants from '../../../utils/constants/Constants';
import * as MapConstants from '../../../utils/json/googlemapstyle';

function GlobalMap({ features, handleImportFeature }) {
	const center = {
		lat: 20.5937,
		lng: 78.9629
	};
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

	// const handleMapClick = (e) => {
	// 	const longitude = e.lngLat.lng;
	// 	const latitude = e.lngLat.lat;
	// 	setNewPlace({
	// 		latitude: latitude,
	// 		longitude: longitude,
	// 	});
	// 	setPaint({ 'fill-color': '#108041', 'fill-opacity': 1 });
	// };
	const handleMapClick = (event) => {
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ location: event.latLng }, (results, status) => {
			if (status === 'OK' && results.length) {				
				const country = results.find((component) => component.types.includes('country'));
				console.log(country.geometry);
				// setAddress(country);
				handleImportFeature(country.address_components[0].short_name);
			} else {
				console.error('Geocode was not successful:', status);
			}
		});
	};

	const handleMapScroll = (e) => {
		e.preventDefault();
		const deltaY = e.originalEvent.deltaY;
		const zoom = viewport.zoom;
		var newZoom;
		if (deltaY > 0) {
			newZoom = Math.max(1, viewport.zoom - 1);;
		} else {
			newZoom = Math.min(zoom + 1, 20);;
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
				
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [newPlace.latitude, newPlace.longitude]);




	const mapOptions = {
		disableDefaultUI: true, // Disables default UI, including zoom buttons
		zoomControl: false, // Disables only the zoom control (zoom buttons)
		styles: MapConstants.gmapstyle
	};

	return (
		<div
			className='MapContainer row'
			style={{ height: '81vh', width: '100vw', zIndex: 999 }}
		>
			<LoadScript googleMapsApiKey="AIzaSyBS2A07XHOScEqDgy9d3iKhGSb1IfHQnkE">
				<GoogleMap mapContainerStyle={MapConstants.containerStyle} center={center} zoom={1.5} options={mapOptions} onClick={handleMapClick} >
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default GlobalMap;
