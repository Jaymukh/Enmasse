import React, {useState} from 'react';
import Profile from './Profile';
import Settings from './Settings';
import Invite from './invite/Invite';

function DetailsContainer({visiblePanel}) {

	return (
		<div className='col-9 h-100'>
			{ ( visiblePanel === 0 ) ? < Profile /> : (  visiblePanel === 1) ? < Settings /> : < Invite /> }
		</div>
	);
}

export default DetailsContainer;
