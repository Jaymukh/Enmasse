import React from 'react';
import FamilySidePanel from './FamilySidePanel';
import FamilyDetailsContainer from './FamilyDetailsContainer';
import FamilyDetailsEmptyContainer from './FamilyDetailsEmptyContainer';
import DistrictSidebar from './DistrictSidebar';
import '../../../App.css';


function Family({selectedFamily, selectedData, handleCarouselSlide, handleBackClick}) {
	return (
		<>
			<FamilySidePanel selectedFamily={selectedFamily} selectedData={selectedData} handleCarouselSlide={handleCarouselSlide} />
			
			{selectedData.properties.familyDetails ? 
			<FamilyDetailsContainer selectedData={selectedData} handleCarouselSlide={handleCarouselSlide} /> :
			<FamilyDetailsEmptyContainer selectedData={selectedData} handleCarouselSlide={handleCarouselSlide} handleBackClick={handleBackClick} />}

			<DistrictSidebar selectedData={selectedData} />
		</>
	);
}

export default Family;
