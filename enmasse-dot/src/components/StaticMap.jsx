import { GoogleMap, LoadScript } from '@react-google-maps/api';
import * as MapConstants from './../utils/json/googlemapstyle';
import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';
import * as turf from '@turf/turf';
import * as d3 from "d3";

const StaticMap = () => {
    const [geoJSON, setGeoJSON] = useState(null);
    const [map, setMap] = useState(null);

    const [center, setCenter] = useState({
        lat: 20.5937,
        lng: 78.9629
    });
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: false,
        styles: MapConstants.staticMapStyle
    };

    const loadGeoJSON = async (map) => {
        try {
            var module = await import(
                './../utils/json/geojson/countries/IN.geo.json'
            );
            // var response = await axios.get(module.default);
            // var data = response.data;
            var data = module.default;
            console.log(data);
            // const centroid = turf.centroid(data);
            // setCenter(centroid.geometry.coordinates);
            setGeoJSON(data);
            map.data.forEach((feature) => {
                map.data.remove(feature);
            });
            map.data.addGeoJson(data);
            setFeatureStyle(map);
        } catch (error) {
            console.error('Error importing file', error);
        }
    };

    const getColorBasedOnPopulation = (population) => {
        if (population <= 100000) {
            return '#D4E2DB';
        } else if (population <= 5000000) {
            return '#83BFA1';
        } else if (population <= 10000000) {
            return '#429C6B';
        } else if (population <= 50000000) {
            return '#108041';
        } else {
            return '#D4E2DB';
        }
    };

    const setFeatureStyle = (map) => {
        map.data.setStyle((feature) => {
            const population = feature.getProperty('population');
            const fillColor = getColorBasedOnPopulation(population);
            return {
                fillColor,
                fillOpacity: 0.7,
                strokeColor: fillColor,
                strokeWeight: 0.35,
            };
        });
    }

    const handleMapLoad = useCallback((mapInstance) => {
        loadGeoJSON(mapInstance);
    }, []);
    return (
        <div style={{ height: '100%', width: '100%' }} className='d-flex flex-column align-items-center justify-content-center'>
            <LoadScript
                googleMapsApiKey={apiKey}
            >
            <GoogleMap
                zoom={3.5}
                mapContainerStyle={MapConstants.containerStyle}
                center={center}
                onLoad={handleMapLoad}
                options={mapOptions}
            >
            </GoogleMap>
            </LoadScript>
        </div>

    )
}

export default StaticMap;