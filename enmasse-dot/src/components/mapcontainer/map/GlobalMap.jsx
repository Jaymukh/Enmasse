import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import * as MapConstants from '../../../utils/json/googlemapstyle';

function GlobalMap({ features, handleImportFeature }) {
	const center = {
		lat: 20.5937,
		lng: 78.9629
	};

	const handleMapClick = (event) => {
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ location: event.latLng }, (results, status) => {
			if (status === 'OK' && results.length) {
				const country = results.find((component) => component.types.includes('country'));
				handleImportFeature(country.address_components[0].short_name);
			} else {
				console.error('Geocode was not successful:', status);
			}
		});
	};

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
