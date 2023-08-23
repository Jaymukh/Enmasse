import '../../../styles/mapcontainer/map/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import GlobalMap from './GlobalMap';
import NonGlobalMap from './NonGlobalMap';
import axios from 'axios';
import * as turf from '@turf/turf';
import InsightBar from '../../InsightBar';
import MapButtonGroup from './MapButtonGroup';
import DashboardContainer from '../../dashboardcontainer/ScatterGraph';
import StateMap from './StateMap';

function Map({
	global,
	selectedCountry,
	selectedCountryCode,
	selectedState,
	selectedDistrict
}) {
	const [features, setFeatures] = useState();
	const [pointFeatures, setPointFeatures] = useState();
	const [zoom, setZoom] = useState();

	const handleZoom = (event, zoomIn) => {
		return zoomIn;
	}

	const handleImportFeature = async (code) => {
		try {
			if (code) {
				var module = await import(
					'../../../utils/json/geojson/countries/' + code + '.geo.json'
				);
				setFeatures(module.default);
			} else {
				if (!selectedState && selectedCountry) {
					var module = await import(
						'../../../utils/json/geojson/countries/' + selectedCountryCode + '.geo.json'
					);
					setFeatures(module.default);
					const pointFeatures = module.default.features.map((feature) => {
						const centroid = turf.centroid(feature);
						return turf.point(centroid.geometry.coordinates, feature.properties);
					});
					const geoJsonData = {
						"type": 'FeatureCollection',
						"features": pointFeatures,
					};
					setPointFeatures(pointFeatures);
					// setPointFeatures([
					// 	{
					// 		center: { lat: 20.5937, lng: 78.9629 },
					// 		radius: 100000, // in meters
					// 	},
					// 	{
					// 		center: { lat: 19.0760, lng: 72.8777 },
					// 		radius: 30000,
					// 	},
					// 	{
					// 		center: { lat: 27.75356495721335, lng: 95.02293978104811 },
					// 		radius: 30000,
					// 	},
					// 	{
					// 		center: { lat: 17.830499887086678, lng: 78.89114589359214 },
					// 		radius: 30000,
					// 	},
					// 	{
					// 		center: { lat: 26.42117938687067, lng: 80.1305153658293 },
					// 		radius: 40000,
					// 	},
					// ])
				} else if (!selectedDistrict && selectedState) {
					var state = selectedState.toUpperCase();
					var module = await import(
						'../../../utils/json/geojson/states/' + state + '_STATE.geojson'
					);
					var response = await axios.get(module.default);
					var data = response.data;

					//var state = selectedState.toLowerCase();
					//var stateFeature = feature.filter()

					setFeatures(data);
				} else if (selectedDistrict) {
					var district = selectedDistrict.toUpperCase();
					var module = await import(
						'../../../utils/json/geojson/districts/' + district + '.geojson'
					);
					var response = await axios.get(module.default);
					var data = response.data;
					setFeatures(data);
				}
			}
		} catch (error) {
			console.error('Error importing file', error);
		}
	};

	return (
		<div>
			{global ? (
				<GlobalMap
					features={features}
					handleImportFeature={handleImportFeature}
					handleZoom={handleZoom}
				/>
				// ) : (
				// 	<NonGlobalMap
				// 		features={features}
				// 		handleImportFeature={handleImportFeature}
				// 		countryCode={selectedCountryCode}
				// 		selectedCountry={selectedCountry}
				// 		selectedState={selectedState}
				// 		selectedDistrict={selectedDistrict}
				// 		pointFeatures={pointFeatures}
				// 		handleZoom={handleZoom}
				// 	/>
				// )}
			) : (
				<StateMap
					features={features}
					handleImportFeature={handleImportFeature}
					selectedCountry={selectedCountry}
					selectedState={selectedState}
					selectedDistrict={selectedDistrict} 
					pointFeatures={pointFeatures} 
				/>
			)}
			<div className='d-flex flex-row bottom-0 end-0 position-fixed' style={{ zIndex: 998 }}>
				{/* <MapButtonGroup handleZoom={handleZoom}/> */}
				<InsightBar />
			</div>

		</div>
	);
}

export default Map;
