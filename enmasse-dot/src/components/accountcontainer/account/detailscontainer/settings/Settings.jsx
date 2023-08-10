import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as Constants from '../../../../../utils/constants/Constants';
import ChangePassword from './ChangePassword';


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

    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [selectedLocation, setSelectedLocation] = useState('India');


    // Event handler to handle changes in the select option

    const handleSelectLanguage = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleSelectCurrency = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleSelectLocation = (event) => {
        setSelectedLocation(event.target.value);
    };

    var [open, setOpen] = useState(false);

    const handleUpdateClick = () => {
        handleDrawer(false);
    };

    const handleDrawer = (open) => {
        setOpen(open);
    }

    return (
        <div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
            <div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4">
                <h5 className='mt-2 col-2'>Settings</h5>
                <button className='btn btn-outline-secondary width-fit-content-button' onClick={() => handleDrawer(true)}>
                    <LockIcon className='mx-1 mb-1  color-black' />
                    Change Password
                </button>
            </div>
            <hr />
            <div className="row w-100 h-90">
                <div className='col-5 d-flex justify-content-start flex-column text-justify m-4'>
                    <h6 className='mt-2 text-start'>Language</h6>
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left '>
                        {Constants.languages.map((data) => (
                            <option>{data.value}</option>
                        ))}
                    </select>
                    <h6 className='mt-2 text-start'>Currency</h6>
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left'>
                        {Constants.currency.map((data) => (
                            <option>{data.value}</option>
                        ))}
                    </select>
                    <h6 className='mt-2 text-start'>Location</h6>
                    <select className='mb-2 btn-outline-black inputBoxHeight text-left'>
                        {Constants.location.map((data) => (
                            <option>{data.value}</option>
                        ))}
                    </select>
                    <Stack direction="row" alignItems="center" className='btn-outline-black d-flex justify-content-between mt-4 inputBoxHeight'>
                        <Typography className='color-black font-weight-bold fw-bold' noWrap>Receive email notifications</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </Stack>
                </div>
            </div>
            {open && (<ChangePassword open={open} handleUpdateClick={handleUpdateClick} handleDrawer={handleDrawer} />)}
        </div>
    )
}

