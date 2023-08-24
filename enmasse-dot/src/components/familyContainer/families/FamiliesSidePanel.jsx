import React, { useState } from 'react'
import '../../../App.css';
import Box from '@mui/material/Box';


function FamilySidePanel() {
    return (
        <div className='col-3 d-flex justify-content-center align-items-center h-100'>
            <Box sx={{ width: '100%', maxWidth: 360, height: '98%', bgcolor: 'white',flexDirection:'column', justifyContent: 'center', margin: 'auto' }} >
                <div className="card" style={{ width: 'fit-content', height: 'fit-content' }}>
                    <h5 className="card-title">Card title</h5>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                
            </Box>
        </div>
    );
}

export default FamilySidePanel;
