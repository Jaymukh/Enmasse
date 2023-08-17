import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FamilyHeader({ handleBackClick, selectedData, handleMapDisplay }) {
	
	const onNavigateBack = () => {
		handleMapDisplay(true);
	}

	return (
		<div className="row w-100 bg-white mx-0 mb-2 ps-6" >
			<button className='btn btn-white ms-5' onClick={selectedData ? handleBackClick : onNavigateBack}><ArrowBackIcon className='me-2 mb-1 color-black' />
                Back
            </button>
		</div>
	);
}

export default FamilyHeader;
