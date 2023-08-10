import React, {useState} from 'react';
import Profile from './profile/Profile';
import Settings from './settings/Settings';
import Invite from './invite/Invite';

function DetailsContainer({visiblePanel}) {

	return (
		<div className='col-9 h-100'>
			{ ( visiblePanel === 0 ) ? < Profile /> : (  visiblePanel === 1) ? < Settings /> : < Invite /> }
		</div>
	);
}

export default DetailsContainer;
