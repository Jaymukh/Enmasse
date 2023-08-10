import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Constants from '../../../../../utils/constants/Constants';

export default function InviteNew({
    openInviteNew,
    handleCloseInviteNew,
    inviteData,
    setInviteData
}) {
    const [newData, setNewData] = useState({});

    const handleChangeData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setNewData({ ...newData, [name]: value });
    }
    const handleSubmitInviteNew = () => {
        setInviteData([...inviteData, newData]);
        handleCloseInviteNew();
      };

    return (
        <div className=''>
            <Drawer
                anchor='right'
                open={openInviteNew}
                onClose={handleCloseInviteNew}
                className='edit-profile-drawer-width edit-profile-drawer-padding'
            >
                <Box className='d-flex flex-wrap justify-content-between mb-2'>
                    <h5 className=''>
                        Invite
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={handleCloseInviteNew} />
                    </button>
                </Box>
                <Box className='d-flex justify-content-center flex-column'>
                    <h6 className='my-2'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={newData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={newData.email} name='email'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Role</h6>
                    <input type="tel" maxlength="10" placeholder="Enter your phone number" value={newData.role} name='role'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                    <h6 className='my-2'>Company</h6>
                    <Select
                        value={newData.company}
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
                        value={newData.companyType}
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
                    <text className='my-3 Note  d-flex justify-content-center align-items-center'>Note: Admins will be able to invite users to the platform</text>
                    <button className='btn-black inputBoxHeight my-4' onClick={handleSubmitInviteNew}>Invite</button>
                </Box>
            </Drawer>
        </div>
    );
}
