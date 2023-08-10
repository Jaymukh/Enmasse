import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Editprofile({open, handleUpdateClick, handleDrawer, name, email, phone, country, company, role, designation, handleNameChange, handleEmailChange, handlePhoneChange, handleCountryChange, handleCompanyChange, handleDesignationChange, handleRoleChange}) {

    return (
        <div className=''>
            <Drawer
                anchor='right'
                open={open}
                onClose={() => handleDrawer(false)}  
                className='edit-profile-drawer-width edit-profile-drawer-padding'
            >
                <Box className='d-flex flex-wrap justify-content-between mb-2'>
                    <h5 className=''>
                        Edit Profile
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={() => handleDrawer(false)} />
                    </button>                    
                </Box>
                <Box className='d-flex justify-content-center flex-column'>
                <h6 className='my-2'>Name</h6>
                <input type="text" placeholder="Enter your name" value={name}
                    onChange={handleNameChange} className='my-2  p-2 btn-outline-black inputBoxHeight'/>
                <h6 className='my-2'>Email</h6>
                <input type="email" placeholder="Enter your Email ID" value={email}
                    onChange={handleEmailChange} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                <h6 className='my-2'>Phone Number</h6>
                <input type="tel" maxlength="10" placeholder="Enter your phone number" value={phone}
                    onChange={handlePhoneChange} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                <h6 className='my-2'>Country</h6>
                <Select
                    value={country}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='btn-outline-black inputBoxHeight p-0'
                    onChange={handleCountryChange}
                >
                    <MenuItem value='India'>India</MenuItem>
                    <MenuItem value='China'>China</MenuItem>
                    <MenuItem value='England'>England</MenuItem>
                </Select>
                <h6 className='my-2'>Company</h6>
                <input type="text" placeholder="Business Name" value={company}
                    onChange={handleCompanyChange} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                <h6 className='my-2'>Designation</h6>
                <input type="text" placeholder="Email ID" value={designation}
                    onChange={handleDesignationChange} className='my-2  p-2 btn-outline-black inputBoxHeight' />
                <h6 className='my-2'>Role</h6>
                <Select
                    sx={{ minWidth: 200 }}
                    value={role}
                    onChange={handleRoleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className='btn-outline-black inputBoxHeight p-0'
                >
                    <MenuItem value='Admin'>Admin</MenuItem>
                    <MenuItem value='User'>User</MenuItem>
                </Select>
                <button className='btn-black inputBoxHeight my-5' onClick={handleUpdateClick}>Update Profile</button>
                </Box>
            </Drawer>
        </div>
    );
}

