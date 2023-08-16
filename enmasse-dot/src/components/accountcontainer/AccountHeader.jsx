import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AccountHeader({ handleMapDisplay, handleDisplayDashboard }) {
	const onNavigateBack = () => {
		handleMapDisplay(true);
		handleDisplayDashboard(false);
	}

	return (
		<div className="col-12 w-100 bg-white mx-0 ps-6 border-bottom" >
			<button className='btn btn-white m-0 d-flex justify-content-start align-items-center border-0' onClick={onNavigateBack}>
				<ArrowBackIcon className='me-2 mb-1 text-dark' />
				Back
			</button>
		</div>
	);
}

export default AccountHeader;
