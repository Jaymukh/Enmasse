import React from 'react'
import '../../../../../App.css';
import Box from '@mui/material/Box';
import Drawer from '../../../../ui/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import WorkInProgressImage from '../../../../../utils/images/work_in_progress.svg';

export default function EditSetting({ editMode, handleEditClick }) {
    return (
        <>

            <Drawer
                id='edit-setting'
                title='Edit Setting'
                isOpen={editMode}
                toggleFunction={handleEditClick}
            >
                <Box className='d-flex justify-content-center flex-column'>
                    <div className="d-flex justify-content-center p-5">
                        <div className="" style={{ width: '18rem' }}>
                            <img src={WorkInProgressImage} className="card-img-top" alt="Image" width="100%" />
                            <div className="card-body">
                                <h5 className="card-title">Work in progress</h5>
                                <p className="card-text">Our team is actively developing these features for the upcoming updates. Keep an eye out for more information.</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </>
    )
}
