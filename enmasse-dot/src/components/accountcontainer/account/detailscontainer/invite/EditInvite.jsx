import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Constants from '../../../../../utils/constants/Constants';

export default function EditInvite({
    selectedData,
    handleCloseDialog,
    handleUpdate,
}) {
    // State variables for managing the input 
    const [updatedData, setUpdatedData] = useState(selectedData);

    const handleChangeData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setUpdatedData({ ...updatedData, [name]: value });
    }

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
                        Edit
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={handleCloseDialog} />
                    </button>
                </Box>
                <Box className='d-flex justify-content-center flex-column'>
                    <h6 className='my-2'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={updatedData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={updatedData.email} name='email'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Role</h6>
                    <input type="tel" maxlength="10" placeholder="Enter your phone number" value={updatedData.role} name='role'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Company</h6>
                    <Select
                        value={updatedData.company}
                        name='company'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black inputBoxHeight p-0'
                        onChange={(e) => handleChangeData(e)}
                    >
                        {Constants.company.map((company) => (
                            <MenuItem value={company.key}>{company.value}</MenuItem>
                        ))}
                    </Select>
                    <h6 className='my-2'>CompanyType</h6>
                    <Select
                        value={updatedData.companyType}
                        name='companyType'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black inputBoxHeight p-0'
                        onChange={(e) => handleChangeData(e)}
                    >
                        {Constants.companyType.map((companyType) => (
                            <MenuItem value={companyType.key}>{companyType.value}</MenuItem>
                        ))}
                    </Select>
                    <button className='btn-black inputBoxHeight my-5' onClick={handleUpdateClick}>Update</button>
                </Box>
            </Drawer>
        </div>
    );
}
