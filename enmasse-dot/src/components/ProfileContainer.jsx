import React, {useState} from 'react';
import Header from './headercontainer/Header';
import AccountContainer from './accountcontainer/AccountContainer';

const ProfileContainer = ({ handleVisiblePanel, handleOverlay, handleInfographic, visiblePanel }) => {

    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} handleInfographic={handleInfographic} />
            <AccountContainer handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel} />
        </div>
    )
}

export default ProfileContainer;