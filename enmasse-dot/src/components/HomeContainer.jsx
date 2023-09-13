import { useEffect } from 'react';
import Header from './headercontainer/Header';
import MapContainer from './mapcontainer/MapContainer';
import OverlayContainer from '../components/overlaycontainer/OverlayContainer';

const HomeContainer = ({ handleVisiblePanel, handleOverlay, handleInfographic, overlay, showInfographic }) => {

    return (
        <>
            <div className='w-100 primary-bg'>
                <Header handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} handleInfographic={handleInfographic} />
                <MapContainer />
            </div>
            {overlay ? (
                <div className='overlay d-flex flex-wrap justify-content-center align-items-center'>
                    <OverlayContainer handleOverlay={handleOverlay} handleInfographic={handleInfographic} showInfographic={showInfographic} />
                </div>
            ) : (
                ''
            )}
        </>
    )
}

export default HomeContainer;