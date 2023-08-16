import '../../../styles/mapcontainer/mapoptions/MapOptions.css';
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Divider } from '@mui/material';
import Bookmarks from './Bookmarks';
import Filters from './Filters';
import SelectBox from './SelectBox';

function MapOptions({
	handleGlobal,
	handleCountryChange,
	handleStateChange,
	handleDistrictChange,
	global,
	selectedCountry,
	selectedState,
	selectedDistrict,
	countries,
	states,
	districts
}) {

	return (
		<div className='row justify-content-around align-items-center border-bottom bg-white mx-0 map-options-height'>
			<div className='col-xl-7 col-md-7 justify-content-start d-flex flex-wrap'>
				<div className='select-right-margin py-1'>
					<button 
						className='subheader-btn global-btn px-3 text-start d-flex flex-row align-items-end'
						onClick={handleGlobal}>
						Global
					</button>
				</div>
				{!global ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>COUNTRY</p>
						<SelectBox
							handleChange={handleCountryChange}
							options={countries}
							selected={selectedCountry}
							primary={false}
						/>
					</div>
				) : (
					''
				)}
				{!global && selectedCountry ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>STATE</p>
						<SelectBox
							handleChange={handleStateChange}
							options={states}
							selected={selectedState}
							primary={false}
						/>
					</div>
				) : (
					''
				)}
				{!global && selectedState ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>DISTRICT</p>
						<SelectBox
							handleChange={handleDistrictChange}
							options={districts}
							selected={selectedDistrict}
							primary={false}
						/>
					</div>
				) : (
					''
				)}
			</div>
			<div className='col-xl-5 col-md-5 d-flex flex-wrap justify-content-end align-items-center'>
				<button className='subheader-btn'>
					<div className='d-flex flex-wrap'>
						<FiDownload className='mt-1' />
						<p className='px-2 my-0'>Download the data</p>
					</div>
				</button>
				<Bookmarks />
				{/* <Filters /> */}
			</div>
		</div>
	);
}

export default MapOptions;
