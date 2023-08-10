import '../../styles/headercontainer/Header.css';
import React from 'react';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { MdLiveHelp } from 'react-icons/md';
import AccountOptions from './AccountOptions';
import Notifications from './Notifications';
import RequestDetails from './RequestDetails';
import ShareLocation from './ShareLocation';

function Header({handleMapDisplay, handleVisiblePanel}) {
	return (
		<div className="d-flex flex-wrap justify-content-between border-bottom bg-white py-3 my-0 header-height" >
			<div className="d-flex flex-wrap justify-content-between">
				<div className="d-flex flex-wrap mx-3 align-items-center">
					<h3 className='mx-3 enmasse-logo-font'>enmasse</h3>
					{/* <Divider orientation="vertical" className='mx-1'/> */}
					<div className='enmasse-circle'></div>
					<h6 className='enmasse-logo-font mx-3 mt-2'>D.O.T.S</h6>
				</div>
				{/* <TextField
						className='header-search-bar'
						search
						placeholder='Search by location'
						size='small'
						InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon/>
                              </InputAdornment>
                            ),
                          }}
					></TextField> */}
			</div>
			<div className="d-flex flex-wrap justify-content-between align-items-center mx-4">
				<ShareLocation/>
				<RequestDetails/>
				{/* <Divider orientation="vertical" className='mx-3'/> */}
				<MdLiveHelp fontSize={25} className='ms-4 me-3 mb-1 header-icon' />
				<Notifications className='mx-2 header-icon'/>
				<AccountOptions className='mx-2' handleMapDisplay={handleMapDisplay} handleVisiblePanel={handleVisiblePanel}/>
			</div>
		</div>
	);
}

export default Header;
