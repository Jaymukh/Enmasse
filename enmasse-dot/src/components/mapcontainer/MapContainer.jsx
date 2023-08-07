import '../../styles/mapcontainer/MapContainer.css';
import React, { useState } from 'react';
import MapOptions from './mapoptions/MapOptions';
import Map from './map/Map';
import { Country, State, City }  from 'country-state-city';

const options = [
	{
		isoCode: 'GL',
		name: 'Global',
	},
	{
		isoCode: 'NL',
		name: 'National',
	}
];

const countries = Country.getAllCountries();

const districts = [
	{
		key: "JG",
		name: "Junagadh",
		state: "Gujarat"
	}
]

function MapContainer() {
	const [pselected, setpSelected] = useState(options[0].name);
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedState, setSelectedState] = useState({});
	const [selectedDistrict, setSelectedDistrict] = useState({});
	const [states, setStates] = useState();

	const handlePrimaryChange = (event) => {
		setpSelected(event.target.value);
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
				handlePrimaryChange={handlePrimaryChange}
				handleCountryChange={handleCountryChange}
				handleStateChange={handleStateChange}
				handleDistrictChange={handleDistrictChange}
				pselected={pselected}
				selectedCountry={selectedCountry.name}
				selectedState={selectedState.name}
				selectedDistrict={selectedDistrict}
				options={options}
				countries={countries}
				states={states}
				districts={districts}
			/>
			<Map
				pselected={pselected}
				selectedCountry={selectedCountry.name}
				selectedCountryCode={selectedCountry.isoCode}
				selectedState={selectedState.name}
				selectedDistrict={selectedDistrict}
			/>
		</div>
	);
}

export default MapContainer;
