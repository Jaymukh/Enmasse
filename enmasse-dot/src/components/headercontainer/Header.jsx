import '../../styles/headercontainer/Header.css';
import React from 'react';
import { MdLiveHelp } from 'react-icons/md';
import AccountOptions from './AccountOptions';
import Notifications from './Notifications';
import MapYourBusiness from './MapYourBusiness';
import ExploreNow from './ExploreNow';

function Header({handleVisiblePanel}) {
	return (
		<div className="d-flex flex-wrap justify-content-between border-bottom bg-white py-3 my-0 w-100" style={{ height: '11.5vh' }} >
			<div className="d-flex flex-wrap justify-content-between">
				<div className="d-flex flex-wrap mx-3 align-items-center">
					<h3 className='mx-3 enmasse-logo-font'>enmasse</h3>
					<div className='enmasse-circle'></div>
					<h6 className='enmasse-logo-font mx-3 mt-2'>D.O.T.S</h6>
				</div>
			</div>
			<div className="d-flex flex-wrap justify-content-between align-items-center mx-4">
				<ExploreNow/>
				<MapYourBusiness/>
				<MdLiveHelp fontSize={25} className='ms-4 me-3 mb-1 header-icon' />
				<Notifications className='mx-2 header-icon'/>
				<AccountOptions className='mx-2' handleVisiblePanel={handleVisiblePanel} />
			</div>
		</div>
	);
}

export default Header;
