import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import * as MapConstants from '../../../utils/json/googlemapstyle';
import GlobalOverlayCard from '../../GlobalOverlayCard';
import InsightBar from '../../InsightBar';
import { toast } from 'react-toastify';

function GlobalMap({ features, handleImportFeature }) {
	const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
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
				toast.error('Geocode was not successful:', status);
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
			className='MapContainer map'
			style={{ height: '81vh', width: '100vw', zIndex: 999 }}
		>
			<div className='row bg-transparent h-100 w-100 overlay-card'>
				<div className='col-8'>
					<GlobalOverlayCard />
				</div>
				<div className='col-4 px-0 d-flex justify-content-end'>
					<InsightBar />
				</div>
			</div>

			<LoadScript googleMapsApiKey={apiKey}>
				<GoogleMap mapContainerStyle={MapConstants.containerStyle} center={center} zoom={1.5} options={mapOptions} onClick={handleMapClick} >
				</GoogleMap>
			</LoadScript>
			{/* <div className='d-flex flex-row bottom-0 end-0 position-fixed' style={{ zIndex: 998 }}> */}

			{/* </div> */}
		</div>
	);
}

export default GlobalMap;
