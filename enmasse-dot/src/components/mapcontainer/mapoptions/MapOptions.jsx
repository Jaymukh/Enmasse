import '../../../styles/mapcontainer/mapoptions/MapOptions.css';
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Divider } from '@mui/material';
import Bookmarks from './Bookmarks';
import Filters from './Filters';
import PrimarySelect from './PrimarySelect';

function MapOptions({
	handlePrimaryChange,
	handleCountryChange,
	handleStateChange,
	handleDistrictChange,
	pselected,
	selectedCountry,
	selectedState,
	selectedDistrict,
	options,
	countries,
	states,
	districts
}) {
	return (
		<div className='row justify-content-around align-items-center border-bottom bg-white mx-0 map-options-height'>
			<div className='col-xl-7 col-md-7 justify-content-start d-flex flex-wrap'>
				<div className='select-right-margin py-1'>
					<PrimarySelect
						variant='bordernone'
						handleChange={handlePrimaryChange}
						options={options}
						selected={pselected}
						primary={true}
					/>
				</div>
				{pselected === 'National' ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>COUNTRY</p>
						<PrimarySelect
							handleChange={handleCountryChange}
							options={countries}
							selected={selectedCountry}
							primary={false}
						/>
					</div>
				) : (
					''
				)}
				{pselected === 'National' && selectedCountry ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>STATE</p>
						<PrimarySelect
							handleChange={handleStateChange}
							options={states}
							selected={selectedState}
							primary={false}
						/>
					</div>
				) : (
					''
				)}
				{pselected === 'National' && selectedState ? (
					<div className='select-right-margin ms-2 py-1'>
						<p className='country-text'>DISTRICT</p>
						<PrimarySelect
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
