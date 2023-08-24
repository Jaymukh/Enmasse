import React, { useState } from 'react';
import FamilyHeader from './FamilyHeader';
import Families from './families/Families';
import Family from './family/Family';
import '../../App.css';
import { families } from '../../utils/constants/Constants';


function FamilyContainer() {
	const [selectedFamily, setSelectedFamily] = useState(null);
	const [selectedData, setSelectedData] = useState(null);

	const handleFamilyVisible = (index) => {
		if (families && index >= 0) {
			setSelectedFamily(index);
			var data = families.family[index];
			setSelectedData(data);
		}
	};
	const handleBackClick = () => {
		setSelectedData(null);
	};
	const handleCarouselSlide = (selectedFamily) => {
		setSelectedFamily(selectedFamily);
		setSelectedData(families.family[selectedFamily]);
	};

	return (
		<div className="row w-100 h-90 fixed-bottom m-0 border-top" style={{ height: '90vh' }}>
			<FamilyHeader selectedData={selectedData} handleBackClick={handleBackClick} />
			{selectedData && Object.keys(selectedData).length > 0 ?
				<Family selectedFamily={selectedFamily} selectedData={selectedData} handleCarouselSlide={handleCarouselSlide} /> : <Families handleFamilyVisible={handleFamilyVisible} />}
		</div>
	);
}

export default FamilyContainer;
