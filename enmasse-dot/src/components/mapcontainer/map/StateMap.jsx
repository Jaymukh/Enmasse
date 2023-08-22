import React, { useEffect, useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Data, Polygon } from '@react-google-maps/api';
import * as MapConstants from '../../../utils/json/googlemapstyle';

const StateMap = ({ features, handleImportFeature, selectedCountry, selectedState, selectedDistrict }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

    const center = {
        lat: 20.5937,
        lng: 78.9629
    };

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: false,
        styles: MapConstants.NonGlobalMapStyle
    };
    const getColorBasedOnPopulation = (population) => {
        if (population <= 100000) {
            return '#D4E2DB'; // Red
        } else if (population <= 5000000) {
            return '#83BFA1'; // Yellow
        } else if (population <= 10000000) {
            return '#429C6B'; // Green
        } else if(population <= 50000000) {
            return '#108041';
        } else {
            return '#D4E2DB';
        }
    };

    useEffect(() => {
        if (map && features) {
            map.data.forEach((feature) => {
                map.data.remove(feature); 
            });
            map.data.addGeoJson(features); 
            
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
    }, [map, features]);

    const handleMapLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
    }, []);

    useEffect(() => {
        handleImportFeature();
    }, [selectedCountry, selectedState, selectedDistrict]);

    return (
        <div className='row'
            style={{ height: '81vh', width: '100vw', zIndex: 999 }}>
            <LoadScript
                googleMapsApiKey='AIzaSyBS2A07XHOScEqDgy9d3iKhGSb1IfHQnkE'
            // libraries={["drawing", "visualization", "geometry", "places"]}
            >
                <GoogleMap
                    ref={mapRef}
                    zoom={4}
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

export default StateMap;