import { useState } from 'react';
import Header from './headercontainer/Header';
import MapContainer from './mapcontainer/MapContainer';
import OverlayContainer from './OverlayContainer';

const HomeContainer = ({ handleVisiblePanel, handleOverlay, overlay }) => {
    

    return (
        <>
            <div className='w-100 primary-bg'>
                <Header handleVisiblePanel={handleVisiblePanel} />
                <MapContainer />
            </div>
            {overlay ? (
                <div className='overlay d-flex flex-wrap justify-content-center align-items-center'>
                    <OverlayContainer handleOverlay={handleOverlay} />
                </div>
            ) : (
                ''
            )}
        </>
    )
}

export default HomeContainer;