import React, { useState, useEffect } from 'react';
import Drawer from '../../../../ui/Drawer';
import '../../../../../App.css';
import * as Constants from '../../../../../../src/utils/constants/Constants';
import { useRecoilValue } from "recoil";
import { useSettingsService } from '../../../../../services';
import { AllSettingsState } from "../../../../../states";

export default function Editprofile({
    selectedData,
    handleUpdate,
    open,
    handleOpen
}) {
    // all settings's data
    const settingsService = useSettingsService();
    const settings = useRecoilValue(AllSettingsState);

    //function to get all the settings details
    useEffect(() => {
        settingsService.getAllSettings();
    }, []);

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
                id='invite'
                title='Invite'
                isOpen={open}
                toggleFunction={handleOpen}
            >
                <div className='d-flex justify-content-center flex-column px-3'>
                    <h6 className='mt-1 font-87-5 text-start'>Name</h6>
                    <input type="text" placeholder="Enter your name" name='name' value={updatedData.name}
                        onChange={(e) => handleChangeData(e)} className='mb-2 p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" name='email_id' value={updatedData.email_id}
                        onChange={(e) => handleChangeData(e)} className='mb-2 p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Phone Number</h6>
                    <input type="tel" maxLength="10" placeholder="Enter your Phone number" name='phone_number' value={updatedData.phone_number}
                        onChange={(e) => handleChangeData(e)} className='mb-2 p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Role</h6>
                    <select name='role' className='mb-2 btn-outline-black inputBoxHeight text-left ' selected={updatedData.role} onChange={(e) => handleChangeData(e)} >
                        {settings?.roles?.map((role) => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                        ))}
                    </select>
                    <h6 className='mt-1 font-87-5 text-start'>Designation</h6>
                    <input type="text" placeholder="Enter your designation" name='designation' value={updatedData.designation}
                        onChange={(e) => handleChangeData(e)} className='mb-2 p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Company</h6>
                    <select name='company' className='mb-2 btn-outline-black inputBoxHeight text-left ' selected={updatedData.company} onChange={(e) => handleChangeData(e)} >
                        {Constants.company.map((company) => (
                            <option key={company.key} value={company.value}>{company.value}</option>
                        ))}
                    </select>
                    <h6 className='mt-1 font-87-5 text-start'>Company Type</h6>
                    <select name='company_type' className='mb-2 btn-outline-black inputBoxHeight text-left ' selected={updatedData.company_type} onChange={(e) => handleChangeData(e)} >
                        {settings?.company_types?.map((company_type) => (
                            <option key={company_type.id} value={company_type.name}>{company_type.name}</option>
                        ))}
                    </select>
                    <button className='btn-black bg-dark border-0 inputBoxHeight my-5' onClick={handleUpdateClick}>Update Profile</button>
                </div>
            </Drawer>
        </div>
    );
}