import React from 'react';
import FamilySidePanel from './FamilySidePanel';
import FamilyDetailsContainer from './FamilyDetailsContainer';
import FamilyDetailsEmptyContainer from './FamilyDetailsEmptyContainer';
import DistrictSidebar from './DistrictSidebar';
import '../../../App.css';


function Family({ selectedFamily, selectedData, handleCarouselSlide, handleBackClick }) {
	return (
		<>
			<FamilySidePanel selectedFamily={selectedFamily} handleCarouselSlide={handleCarouselSlide} />

			{selectedData.properties.familyDetails ?
				<FamilyDetailsContainer selectedData={selectedData} /> :
				<FamilyDetailsEmptyContainer selectedData={selectedData} handleBackClick={handleBackClick} />
			}
			<div className='col-3 py-4 px-2 bg-white px-0' style={{ height: '98%', overflow: 'auto' }}>
				<DistrictSidebar selectedData={selectedData} />
			</div>
		</>
	);
}

export default Family;
