import React, {useState} from 'react';
import FamiliesSidePanel from './FamiliesSidePanel';
import FamiliesDetailsContainer from './FamiliesDetailsContainer';


function Families({handleFamilyVisible}) {
	
	return (
		<>
			<FamiliesSidePanel />
			<FamiliesDetailsContainer handleFamilyVisible={handleFamilyVisible} />
		</>
	);
}

export default Families;
