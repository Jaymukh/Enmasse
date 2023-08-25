import React, { useState } from 'react'
import '../../../App.css';
import Box from '@mui/material/Box';

function FamilySidePanel() {
    return (
        <div className='col-3 d-flex justify-content-center align-items-center h-100'>
            <Box sx={{ width: '100%', maxWidth: 360, height: '98%', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }} >
                <div className="card bg-white d-flex justify-content-center align-items-center" style={{ width: 'auto', height: '20rem' }}>
                    <h6 className="card-title">Static Map will display here</h6>
                </div>
            </Box>
        </div>
    );
}

export default FamilySidePanel;
