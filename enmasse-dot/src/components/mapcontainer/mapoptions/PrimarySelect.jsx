import '../../../styles/mapcontainer/mapoptions/PrimarySelect.css';
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function PrimarySelect({ handleChange, options, selected, primary }) {
	return (
		<div className='primary-select-box'>
			<Select
				sx={{ borderColor: 'common.white' }}
				value={selected}
				onChange={handleChange}
				className={primary ? 'select ps-3' : 'secondary-select'}
				size='small'
				placeholder='SELECT'
			>
				{options.map((option) => (
					<MenuItem key={option.isoCode} value={option.name}>
						{option.name}
					</MenuItem>
				))}
			</Select>
		</div>
	);
}

export default PrimarySelect;
