import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function FamilyHeader({ handleBackClick, selectedData }) {
	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	}

	return (
		<div className="row w-100 bg-white mx-0 ps-6 border-bottom" >
			<button className='btn btn-white m-0 d-flex justify-content-start align-items-center border-0 story-header-btn' onClick={selectedData ? handleBackClick : onNavigateBack}>
				<BiArrowBack className='me-2 mb-1 color-black' fontSize={22} />
                Back
            </button>
		</div>
	);
}

export default FamilyHeader;
