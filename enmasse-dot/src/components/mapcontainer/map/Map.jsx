import '../../../styles/mapcontainer/map/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import GlobalMap from './GlobalMap';
import axios from 'axios';
import * as turf from '@turf/turf';
import InsightBar from '../../InsightBar';
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
					setPointFeatures(pointFeatures);
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
		<div >			
			{global ? (
				<GlobalMap
					features={features}
					handleImportFeature={handleImportFeature}
					handleZoom={handleZoom}
				/>
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

		</div>
	);
}

export default Map;
