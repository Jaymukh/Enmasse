import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '../../../../ui/Drawer';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Constants from '../../../../../utils/constants/Constants';
import '../../../../../App.css';
import { useRecoilValue } from "recoil";
import { useUserService, useSettingsService } from '../../../../../services';
import { loggedUserState, AllSettingsState } from "../../../../../states";
import { toast } from "react-toastify";

export default function InviteNew({
    openInviteNew,
    handleCloseInviteNew,
    getUsers,
    showToast
}) {
    const [newData, setNewData] = useState({});
    const userService = useUserService();
    const loggedUser = useRecoilValue(loggedUserState);

    // all settings's data
    const settingsService = useSettingsService();
    const settings = useRecoilValue(AllSettingsState);

    //function to get all the settings details
    useEffect(() => {
        settingsService.getAllSettings();
        console.log('settings', settings);
    }, []);


    const handleChangeData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setNewData({ ...newData, [name]: value });
    }
    const handleSubmitInviteNew = () => {
        var payload = { ...newData, user_id: loggedUser.user_id, designation: 'Manager', country: 'India', phone_number: 5436525362, status: 'Invited' };
        userService.inviteNew(payload).then((response) => {
            if (response) {
                getUsers();
            }
        })
            .catch(error => toast.error(error));
        console.log(newData);
        var payload = { ...newData, user_id: loggedUser.user_id, designation: 'Manager', country: 'India', phone_number: 5436525362, status: 'Invited' };
        userService.inviteNew(payload)
            .then((response) => {
                if (response) {
                    showToast('Successfully Invited.');
                    getUsers();
                }
            })
            .catch(error => showToast(error));
        handleCloseInviteNew();
    };

    return (
        <div className=''>
            {/* <Drawer
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
                </Box> */}
            <Drawer
                id='invite'
                title='Invite'
                isOpen={openInviteNew}
                toggleFunction={handleCloseInviteNew}
            >
                <div className='d-flex justify-content-center flex-column px-3'>
                    <h6 className='mt-1 font-87-5 text-start'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={newData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='mb-2 p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={newData.email_id} name='email_id'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Role</h6>
                    <select name='role' className='my-2 btn-outline-black drawer-input-box-height text-left' selected={newData.role} onChange={(e) => handleChangeData(e)} >
                        {settings?.roles?.map((role) => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                        ))}
                    </select>
                    <h6 className='my-1 font-87-5'>Company</h6>
                    <select name='role' className='my-2 btn-outline-black drawer-input-box-height text-left' selected={newData.role} onChange={(e) => handleChangeData(e)} >
                        {Constants?.company?.map((company) => (
                            <option key={company.key} value={company.value}>{company.value}</option>
                        ))}
                    </select>
                    <h6 className='my-1 font-87-5 font-87-5'>Company Type</h6>
                    <select name='company_type' className='my-2 btn-outline-black drawer-input-box-height text-left' selected={newData.company_type} onChange={(e) => handleChangeData(e)} >
                        {settings?.company_types?.map((company_type) => (
                            <option key={company_type.id} value={company_type.name}>{company_type.name}</option>
                        ))}
                    </select>
                    <p className='my-3 Note  d-flex justify-content-center align-items-center'>Note: Admins will be able to invite users to the platform</p>
                    <button className='btn-black drawer-input-box-height mt-2 mb-3' onClick={handleSubmitInviteNew}>Invite</button>
                </div>
            </Drawer>
        </div >
    );
}

