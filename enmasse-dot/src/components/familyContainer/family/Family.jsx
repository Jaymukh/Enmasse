import React, {useState} from 'react';
import FamilySidePanel from './FamilySidePanel';
import FamilyDetailsContainer from './FamilyDetailsContainer';


function Family() {
	
    // const [visiblePanel, setVisiblePanel] = useState(0);

    // const handleListItemClick = (index) => {
	// 	setVisiblePanel(index);
    // };
	return (
		<>
			<FamilySidePanel />
			<FamilyDetailsContainer />
		</>
	);
}

export default Family;
