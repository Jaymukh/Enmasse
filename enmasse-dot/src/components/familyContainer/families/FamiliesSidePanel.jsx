import React, { useState } from 'react'
import '../../../App.css';
import Box from '@mui/material/Box';
import StaticMap from '../../StaticMap';

function FamiliesSidePanel() {
    return (
        <div className='col-3 d-flex flex-column align-items-start white-bg mt-4 fam-side-map-div ms-3 me-2 story-map-div'>
            <h6 className='fs-14 pt-4 ps-3'>India</h6>
            <div className='map-container-sm'>
                <StaticMap />
            </div>
        </div>
    );
}

export default FamiliesSidePanel;
