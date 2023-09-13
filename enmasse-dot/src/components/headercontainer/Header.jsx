import '../../styles/headercontainer/Header.css';
import '../../App.css';
import React, { useState } from 'react';
import { MdLiveHelp } from 'react-icons/md';
import AccountOptions from './AccountOptions';
import { MdNotifications } from 'react-icons/md';
import MapYourBusiness from './MapYourBusiness';
import ExploreNow from './ExploreNow.jsx';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../../utils/constants/routeConstants';
import WIPDrawer from '../mapcontainer/mapoptions/WIPDrawer.jsx';

function Header({ handleVisiblePanel, handleOverlay, handleInfographic }) {
	const navigate = useNavigate();

	const handleHelp = () => {
		navigate(RouteConstants.root);
		handleOverlay(true);
		handleInfographic(1);
	}
	// open drawer 
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');

	const openWIPDrawer = (title) => {
		setOpen(true);
		setTitle(title);
	};
	const closeWIPDrawer = () => {
		setOpen(false);
		setTitle('');
	};

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
				<ExploreNow />
				{/* <button className='btn btn-black me-2' onClick={() => openExploreNowModal()} >
					<MdOutlineTravelExplore className='me-2' fontSize={20} />
					Explore Now
				</button> */}
				<MapYourBusiness />
				<button className='border-0 btn-white' onClick={() => handleHelp()} ><MdLiveHelp fontSize={25} className='ms-4 me-3 mb-1 header-icon' /></button>
				{/* <Notifications className='mx-2 header-icon' /> */}
				<button className='border-0 btn-white' onClick={() => openWIPDrawer("Notifications")}>
					<MdNotifications fontSize={25} className='mb-1 header-icon' />
				</button>
				<AccountOptions className='mx-2' handleVisiblePanel={handleVisiblePanel} />
			</div>

			{/* {showExploreNowModal && (
				<ExploreNow closeExploreNowModal={closeExploreNowModal}
					showExploreNowModal={showExploreNowModal} />
			)} */}

			{open && <WIPDrawer open={open} title={title} closeWIPDrawer={closeWIPDrawer} />}
			
		</div>
	);
}

export default Header;
