import React, {useState} from 'react';
import SideBar from './SideBar';
import DetailsContainer from './detailscontainer/DetailsContainer';


function Account({handleVisiblePanel, visiblePanel}) {
    
	return (
		<>
			<SideBar handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel} />
			<DetailsContainer visiblePanel={visiblePanel}/>
		</>
	);
}

export default Account;
