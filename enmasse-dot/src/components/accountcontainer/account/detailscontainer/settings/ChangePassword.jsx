import React, { useState } from 'react';
import '../../../../../App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

export default function ChangePassword({ open, handleUpdateClick, handleDrawer }) {
    // password validation code
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');
    const [checkedCharacters, setCheckedCharacters] = useState(false);
    const [checkedSpecial, setCheckedSpecial] = useState(false);
    const [checkedUppercase, setCheckedUppercase] = useState(false);
    const [checkedNumbers, setCheckedNumbers] = useState(false);

    const handleOldPasswordChange = (event) => {
        const oldPassword = event.target.value;
        setOldPassword(event.target.value);
    };
    // Function to handle password validation on form submission
    const handleNewPasswordChange = (event) => {
        const newPassword = event.target.value;
        setDisabled(true);
        setNewPassword(newPassword);
        setCheckedCharacters(false);
        setCheckedSpecial(false);
        setCheckedUppercase(false);
        setCheckedNumbers(false);

        if (newPassword.length >= 8) {
            setCheckedCharacters(true);
        }
        if (newPassword.match(/[0-9]/)) {
            setCheckedNumbers(true);
        }
        if (newPassword.match(/[A-Z]/)) {
            setCheckedUppercase(true);
        }
        if (newPassword.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            setCheckedSpecial(true);
        }
    };
    // Function to handle password input change
    const handleConfirmNewPasswordChange = (event) => {
        const confirmNewPassword = event.target.value;
        setConfirmNewPassword(confirmNewPassword);
        setConfirmNewPasswordError('');
        setDisabled(true);
        if (confirmNewPassword.length >= 8) {
            if (confirmNewPassword === newPassword) {
                setConfirmNewPasswordError('');
                if ((newPassword.length >= 8) && (newPassword.match(/[0-9]/)) && (newPassword.match(/[A-Z]/)) && (newPassword.match(/[!@#$%^&*(),.?":{}|<>]/)) && oldPassword.length >= 8) {
                    setDisabled(false);
                    setConfirmNewPasswordError('');
                }
                else {
                    setDisabled(true);
                    setConfirmNewPasswordError('');
                }
            }
            else {
                setConfirmNewPasswordError('Password does not match!');
                setDisabled(true);
            }
        }
        else{
            setConfirmNewPasswordError('');
        }
    };

    const handleFormSubmit = () => {
        // setVisible(true);
        // Reset the password field and error message
        setNewPassword('');
    };

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
                        Change Password
                    </h5>
                    <button className='bg-white border-0'>
                        <CloseIcon onClick={() => handleDrawer(false)} />
                    </button>
                </Box>                
                <p className='text-muted'>You will be required to re-login after updating the password.</p>
                <Box className='d-flex justify-content-center flex-column'>
                    <h5>Old Password</h5>
                    <input type="password" value={oldPassword} onInput={handleOldPasswordChange} className='mediumMarginTopBottom inputBoxHeight my-2' placeholder='Enter your current password' />
                    <h5>New Password</h5>
                    <input type="password" value={newPassword} onInput={handleNewPasswordChange} className='mediumMarginTopBottom inputBoxHeight my-2' placeholder='Enter your new password' />

                    <div className="row align-items-start my-2" >
                        <div className='col'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={handleNewPasswordChange} checked={checkedCharacters} />
                                <label className="form-check-label text-muted" for="flexCheckDefault">
                                    8 Characters
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" onChange={handleNewPasswordChange} checked={checkedSpecial} />
                                <label className="form-check-label text-muted" for="flexCheckChecked">
                                    Contains special character
                                </label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleNewPasswordChange} checked={checkedUppercase} />
                                <label className="form-check-label text-muted" for="flexCheckDefault">
                                    Contains Uppercase
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={handleNewPasswordChange} checked={checkedNumbers} />
                                <label className="form-check-label text-muted" for="flexCheckChecked">
                                    Contains Numbers
                                </label>
                            </div>
                        </div>
                    </div>
                    <h5>Confirm Password</h5>
                    <input type="password" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange} className='my-2 inputBoxHeight' placeholder='Re-enter your password here' />
                    {confirmNewPasswordError && <p className='text-danger'>{confirmNewPasswordError}</p>}
                    <input type="submit" className={disabled ? 'mediumMarginTopBottom inputBoxHeight bg-secondary text-white my-2' : 'mediumMarginTopBottom inputBoxHeight bg-dark text-white my-2'} onClick={handleUpdateClick} value="Update Password" disabled={disabled} />

                    {/* <button className='btn-black inputBoxHeight my-5' onClick={handleUpdateClick}>Update</button> */}
                </Box>
            </Drawer>
        </div>
    );
}
