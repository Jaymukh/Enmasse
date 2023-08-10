import React from 'react';
import FamilyHeader from './FamilyHeader';
import Family from './family/Family';


function FamilyContainer({ handleMapDisplay }) {
	return (
		<div className="row w-100 fixed-bottom m-0" style={{ height: '90vh' }}>
			<FamilyHeader handleMapDisplay={handleMapDisplay} />
			<Family />
		</div>
	);
}

export default FamilyContainer;
