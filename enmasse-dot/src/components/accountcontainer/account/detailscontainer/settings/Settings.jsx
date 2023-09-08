import React, { useState, useEffect } from 'react';
import '../../../../../App.css';
import LockIcon from '@mui/icons-material/Lock';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as Constants from '../../../../../utils/constants/Constants';
import ChangePassword from './ChangePassword';
import EditSetting from './EditSetting';
import { AllSettingsState, UserSettingsState } from "../../../../../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { useSettingsService } from '../../../../../services';

export default function Settings() {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#000000',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    // handle edit
    const [editMode, setEditMode] = useState(false);

    var [open, setOpen] = useState(false);
    // all settings's data
	const [settings, setSettings] = useRecoilState(AllSettingsState);
    const [usersettings, setUserSettings] = useRecoilState(UserSettingsState);
	const settingsService = useSettingsService();

    const handleUpdateClick = () => {
        handleDrawer(false);
    };

    const handleDrawer = (open) => {
        setOpen(open);
    }
    // handle edit setting
    const handleEditClick = (editMode) => {
        setEditMode(editMode);
    };
    //function to get all the users
	useEffect(() => {
		getSettings();
        getLoggedUserSettings();
	}, []);

	const getSettings = () => {
		settingsService.getAllSettings().then((response) => {
			if (response) {
				setSettings(response);
				console.log('allSettings' + settings);
			}
		});
	};
    const getLoggedUserSettings = () => {
		settingsService.getUserSettings().then((response) => {
			if (response) {
				setUserSettings(response);
				console.log('userSettings' + response);
			}
		});
	};

    return (
        <div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
            <div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4">
                <h5 className='mt-2 col-2'>Settings</h5>
                <div className='mt-2 col-10 d-flex justify-content-end'>
                    <button className='btn btn-outline-secondary width-fit-content-button me-2' onClick={() => handleEditClick(true)}>
                        <ModeEditIcon className='mx-1 mb-1 color-black' />
                        Edit Setting
                    </button>
                    <button className='btn btn-outline-secondary width-fit-content-button' onClick={() => handleDrawer(true)}>
                        <LockIcon className='mx-1 mb-1  color-black' />
                        Change Password
                    </button>
                </div>
            </div>
            <hr />
            <div className="row w-100 h-90">
                <div className='col-5 d-flex justify-content-start flex-column text-justify m-4'>
                    <h6 className='mt-2 text-start'>Language</h6>
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left disabled' selected={usersettings.language}>
                        {settings?.languages?.map((data) => (
                            <option key={data.code} value={data.name}>{data.name}</option>
                        ))}
                    </select>
                    <h6 className='mt-2 text-start'>Currency</h6>
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left disabled' selected={usersettings.currency}>
                        {settings?.currencies?.map((data) => (
                            <option key={data.code} value={data.name}>{data.name}</option>
                        ))}
                    </select>
                    <h6 className='mt-2 text-start'>Location</h6>
                    {/* selected={data.name === usersettings.location} key={data.code} value={data.name}*/}
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left disabled'  selected={usersettings.location}>
                        {settings?.locations?.map((data) => (
                            <option key={data.code} value={data.name}>{data.name}</option>
                        ))}
                    </select>
                    <Stack direction="row" alignItems="center" className='btn-outline-black d-flex justify-content-between mt-4 inputBoxHeight'>
                        <Typography className='color-black font-weight-bold fw-bold' noWrap>Receive email notifications</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Stack>
                </div>
            </div>
            {open && (<ChangePassword open={open} handleUpdateClick={handleUpdateClick} handleDrawer={handleDrawer} />)}
            {editMode && (<EditSetting editMode={editMode} handleEditClick={handleEditClick} />)}
        </div>
    )
}

