import React from 'react';
import '../../styles/OverlayContainer.css';
import LandingPage from './LandingPage';
import EHInfographic from './EHInfographic';
import ISPInfographic from './ISPInfographic';
import TAMInfographic from './TAMInfographic';

function OverlayContainer({ showInfographic, handleOverlay, handleInfographic }) {

	return (
		<div className='OverlayContainer'>
			{(showInfographic === 0) &&
				<LandingPage handleInfographic={handleInfographic} handleOverlay={handleOverlay} />}
			{(showInfographic === 1) &&
				<EHInfographic handleInfographic={handleInfographic} handleOverlay={handleOverlay} />}
			{(showInfographic === 2)  &&
				<ISPInfographic handleInfographic={handleInfographic} handleOverlay={handleOverlay} />}
			{(showInfographic === 3)  &&
				<TAMInfographic handleInfographic={handleInfographic} handleOverlay={handleOverlay} />}
		</div>
	);
}

export default OverlayContainer;
