import React from 'react';
import AccountHeader from './AccountHeader';
import Account from './account/Account';


function AccountContainer({ handleMapDisplay, handleDisplayDashboard, handleVisiblePanel, visiblePanel }) {

	return (
		// <div className="row m-0">
		<div className="row w-100 fixed-bottom m-0 border-top" style={{ height: '90vh' }}>
			<AccountHeader handleMapDisplay={handleMapDisplay} handleDisplayDashboard={handleDisplayDashboard} />
			<Account className='me-3' handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel}/>
		</div>
	);
}

export default AccountContainer;
