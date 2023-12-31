import React, { useState, useEffect } from 'react';
import Drawer from '../../../../ui/Drawer';
import * as Constants from '../../../../../utils/constants/Constants';
import '../../../../../App.css';
import { useRecoilValue } from "recoil";
import { useSettingsService } from '../../../../../services';
import { AllSettingsState } from "../../../../../states";

export default function EditInvite({
    selectedData,
    handleCloseDialog,
    handleUpdate,
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
                id='edit'
                title='Edit'
                isOpen={selectedData !== null}
                toggleFunction={handleCloseDialog}
            >
                <div className='d-flex justify-content-center flex-column mx-3'>
                    <h6 className='mt-1 font-87-5 text-start'>Name</h6>
                    <input type="text" placeholder="Enter your name" value={updatedData.name} name='name'
                        onChange={(e) => handleChangeData(e)} className='mb-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Email</h6>
                    <input type="email" placeholder="Enter your Email ID" value={updatedData.email_id} name='email_id'
                        onChange={(e) => handleChangeData(e)} className='mb-2  p-2 btn-outline-black drawer-input-box-height' />
                    <h6 className='mt-1 font-87-5 text-start'>Role</h6>
                    <select name='role' className='mb-2 btn-outline-black drawer-input-box-height text-left ' value={updatedData.role} onChange={(e) => handleChangeData(e)} >
                        {settings?.roles?.map((role) => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                        ))}
                    </select>
                    <h6 className='mt-1 font-87-5 text-start'>Company</h6>
                    <select name='company' className='mb-2 btn-outline-black drawer-input-box-height text-left ' value={updatedData.company} onChange={(e) => handleChangeData(e)} >
                        {Constants.company.map((company) => (
                            <option key={company.key} value={company.value}>{company.value}</option>
                        ))}
                    </select>
                    <h6 className='mt-1 font-87-5 text-start'>CompanyType</h6>
                    <select name='company_type' className='mb-2 btn-outline-black drawer-input-box-height text-left' value={updatedData.company_type} onChange={(e) => handleChangeData(e)} >
                        {settings?.company_types?.map((company_type) => (
                            <option key={company_type.id} value={company_type.name}>{company_type.name}</option>
                        ))}
                    </select>
                    <button className='btn-black bg-dark border-0 drawer-input-box-height mt-2 mb-3 my-4' onClick={handleUpdateClick}>Update</button>
                </div>
            </Drawer>
        </div>
    );
}

