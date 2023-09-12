import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as Constants from '../../../../../utils/constants/Constants';
import '../../../../../App.css';
import { useRecoilValue } from "recoil";
import { useSettingsService } from '../../../../../services';
import { AllSettingsState } from "../../../../../states";

export default function EditInvite({
    selectedData,
    handleCloseDialog,
    handleUpdate,
    showToast
}) {
    // all settings's data
    const settingsService = useSettingsService();
    const settings = useRecoilValue(AllSettingsState);

    //function to get all the settings details
    useEffect(() => {
        settingsService.getAllSettings();
    }, []);

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
                open={selectedData !== null}
                onClose={() => handleCloseDialog()}
                className='edit-profile-drawer-width edit-profile-drawer-padding'
            >
                <Box className='d-flex flex-wrap justify-content-between mb-2'>
                    <h5 className=''>
                        Edit
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={() => handleCloseDialog()} />
                    </button>
                </Box>
                <Box className='d-flex justify-content-center flex-column'>
                    <h6 className='my-1 font-87-5'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={updatedData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={updatedData.email_id} name='email_id'
                        onChange={(e) => handleChangeData(e)} className='my-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='my-1 font-87-5'>Role</h6>
                    <select name='role' className='my-2 btn-outline-black drawer-input-box-height text-left ' selected={updatedData.role} onChange={(e) => handleChangeData(e)} >
                        {settings?.roles?.map((role) => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                        ))}
                    </select>
                    <h6 className='my-1 font-87-5'>Company</h6>
                    <select name='company' className='my-2 btn-outline-black drawer-input-box-height text-left ' selected={updatedData.company} onChange={(e) => handleChangeData(e)} >
                        {Constants.company.map((company) => (
                            <option key={company.key} value={company.value}>{company.value}</option>
                        ))}
                    </select>
                    <h6 className='my-1 font-87-5'>CompanyType</h6>
                    <select name='company_type' className='my-2 btn-outline-black drawer-input-box-height text-left' selected={updatedData.company_type} onChange={(e) => handleChangeData(e)} >
                        {settings?.company_types?.map((company_type) => (
                            <option key={company_type.id} value={company_type.name}>{company_type.name}</option>
                        ))}
                    </select>
                    <button className='btn-black drawer-input-box-height mt-2 mb-3' onClick={handleUpdateClick}>Update</button>
                </Box>
            </Drawer>
        </div>
    );
}

