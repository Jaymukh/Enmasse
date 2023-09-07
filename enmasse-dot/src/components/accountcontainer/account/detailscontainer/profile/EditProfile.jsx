import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../../../../../App.css';
import * as Constants from '../../../../../../src/utils/constants/Constants';

export default function Editprofile({
    selectedData,
    handleUpdate,
    handleCloseDialog
}) {
    const [updatedData, setUpdatedData] = useState(selectedData);

    const handleChangeData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    const handleUpdateClick = () => {
        handleUpdate(updatedData);
    };

    return (
        <div className=''>
            <Drawer
                anchor='right'
                open={selectedData}
                onClose={handleCloseDialog}
                className='edit-profile-drawer-width edit-profile-drawer-padding'
            >
                <Box className='d-flex flex-wrap justify-content-between mb-2'>
                    <h5 className=''>
                        Edit Profile
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={handleCloseDialog} />
                    </button>
                </Box>
                <Box className='d-flex justify-content-center flex-column'>
                    <h6 className='my-2'>Name</h6>
                    <input type="text" placeholder="Enter your name" name='name' value={updatedData.name}
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" name='email_id' value={updatedData.email_id}
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Phone Number</h6>
                    <input type="tel" maxLength="10" placeholder="Enter your Phone number" name='phone_number' value={updatedData.phone_number}
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Role</h6>
                    <input type="text" placeholder="Enter your role" name='role' value={updatedData.role}
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Designation</h6>
                    <input type="text" placeholder="Enter your designation" name='designation' value={updatedData.designation}
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Company</h6>
                    <Select
                        name='company'
                        value={updatedData.company}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black inputBoxHeight p-0'
                        onChange={(e) => handleChangeData(e)}
                    >
                        {Constants.company.map((company) => (
                            <MenuItem value={company.key}>{company.value}</MenuItem>
                        ))}
                    </Select>
                    <h6 className='my-2'>Company Type</h6>
                    <Select
                        sx={{ minWidth: 200 }}
                        name='company_type'
                        value={updatedData.company_type}
                        onChange={(e) => handleChangeData(e)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black inputBoxHeight p-0'
                    >
                        {Constants.company_type.map((company_type) => (
                            <MenuItem value={company_type.key}>{company_type.value}</MenuItem>
                        ))}
                    </Select>
                    <button className='btn-black inputBoxHeight my-5' onClick={handleUpdateClick}>Update Profile</button>
                </Box>
            </Drawer>
        </div>
    );
}