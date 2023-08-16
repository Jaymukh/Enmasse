import '../../styles/mapcontainer/MapContainer.css';
import React, { useState } from 'react';
import MapOptions from './mapoptions/MapOptions';
import Map from './map/Map';
import { Country, State }  from 'country-state-city';

const countries = Country.getAllCountries();

const districts = [
	{
		key: "JG",
		name: "Junagadh",
		state: "Gujarat"
	}
]

function MapContainer({ handleDisplayDashboard }) {
	const [global, setGlobal] = useState(true);
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedState, setSelectedState] = useState({});
	const [selectedDistrict, setSelectedDistrict] = useState({});
	const [states, setStates] = useState();

	const handleGlobal = () => {
		setGlobal(!global);
		setSelectedCountry({});
		setSelectedState({});
		setSelectedDistrict('');
	};

	const handleCountryChange = (event) => {
		const value = event.target.value;
		const selectedItem = countries.find(item => {
			return item.name === value;
		});
		setStates(State.getStatesOfCountry(selectedItem.isoCode));
		setSelectedCountry(selectedItem);
		setSelectedState({});
		setSelectedDistrict('');
		//setSelectedCountryCode(selectedItem.isoCode);
	};

	const handleStateChange = (event) => {
		const value = event.target.value;
		const selectedItem = states.find(item => {
			return item.name === value;
		});
		setSelectedState(selectedItem);
	};

	const handleDistrictChange = (event) => {
		const value = event.target.value;
		// const selectedItem = states.find(item => {
		// 	return item.name === value;
		// });
		setSelectedDistrict(value);
	};

	return (
		<div className='MapContainer mx-0'>
			<MapOptions
				handleGlobal={handleGlobal}
				handleCountryChange={handleCountryChange}
				handleStateChange={handleStateChange}
				handleDistrictChange={handleDistrictChange}
				global={global}
				selectedCountry={selectedCountry.name}
				selectedState={selectedState.name}
				selectedDistrict={selectedDistrict}
				countries={countries}
				states={states}
				districts={districts}
			/>
			<Map
				global={global}
				selectedCountry={selectedCountry.name}
				selectedCountryCode={selectedCountry.isoCode}
				selectedState={selectedState.name}
				selectedDistrict={selectedDistrict}
				handleDisplayDashboard={handleDisplayDashboard}
			/>
		</div>
	);
}

export default MapContainer;
