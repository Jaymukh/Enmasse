import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Constants from '../../../../../utils/constants/Constants';
import '../../../../../App.css';
import { useUserService } from '../../../../../services';
import { useRecoilValue } from "recoil";
import { loggedUserState} from "../../../../../states";

export default function InviteNew({
    openInviteNew,
    handleCloseInviteNew,
    users,
    setUsers,
    getUsers
}) {
    const [newData, setNewData] = useState({});
    const userService = useUserService();
    const loggedUser= useRecoilValue(loggedUserState);


    const handleChangeData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setNewData({ ...newData, [name]: value });
    }
    const handleSubmitInviteNew = () => {        
        console.log(newData);
        var payload = {...newData, user_id: loggedUser.user_id, designation: 'Manager', country: 'India', phone_number: 5436525362, status: 'Invited' };
        userService.inviteNew(payload).then((response) => {
            if (response) {
                console.log(response);
                getUsers();
            }
        })
        .catch(error => console.log(error));
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
                    <h6 className='my-1 font-87-5'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={newData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={newData.email_id} name='email_id'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Role</h6>
                    <input type="tel" maxlength="10" placeholder="Enter your role" value={newData.role} name='role'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Company</h6>
                    <Select
                        value={newData.company}
                        name='company'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black drawer-input-box-height p-0'
                        onChange={(e) => handleChangeData(e)}
                    >
                        {Constants.company.map((company) => (
                            <MenuItem value={company.key}>{company.value}</MenuItem>
                        ))}
                    </Select>
                    <h6 className='my-1 font-87-5 font-87-5'>Company Type</h6>
                    <Select
                        value={newData.company_type}
                        name='company_type'
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='btn-outline-black drawer-input-box-height p-0'
                        onChange={(e) => handleChangeData(e)}
                    >
                        {Constants.company_type.map((company_type) => (
                            <MenuItem value={company_type.key}>{company_type.value}</MenuItem>
                        ))}
                    </Select>
                    <text className='my-3 Note  d-flex justify-content-center align-items-center'>Note: Admins will be able to invite users to the platform</text>
                    <button className='btn-black drawer-input-box-height mt-2 mb-3' onClick={handleSubmitInviteNew}>Invite</button>
                </Box>
            </Drawer>
        </div>
    );
}

