import React, {useState} from 'react';
import Header from './headercontainer/Header';
import AccountContainer from './accountcontainer/AccountContainer';

const ProfileContainer = ({ handleVisiblePanel, visiblePanel }) => {

    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} />
            <AccountContainer handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel} />
        </div>
    )
}

export default ProfileContainer;