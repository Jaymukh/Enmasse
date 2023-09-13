import React from 'react';
import AccountHeader from './AccountHeader';
import Account from './account/Account';

function AccountContainer({ handleVisiblePanel, visiblePanel }) {

	return (
		<div className="row w-100 h-90 fixed-bottom m-0 border-top" style={{ height: '90vh' }}>
			<AccountHeader />
			<Account className='me-3' handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel}/>
		</div>
	);
}

export default AccountContainer;
