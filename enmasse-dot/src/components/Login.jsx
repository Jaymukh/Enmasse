import '../App.css';
import React, { useState } from 'react';
import globe from '../utils/images/globe.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function Login({ handleLoggedIn }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleEmailInput = (event) => {
        const email = event.target.value;
        setEmail(email);
        setErrorMessageEmail('');
        setDisabled(true);
        if (email) {
            if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                setEmail(email);
                setErrorMessageEmail('');
            }
            else {
                setErrorMessageEmail('Enter a valid email.');
                setDisabled(true);
            }
        }
        if (password.length >= 8 && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setDisabled(false);
        }
    }

    const handlePasswordInput = (event) => {
        const password = event.target.value;
        setPassword(password);
        setErrorMessagePassword('');
        setDisabled(true);
        if (password) {
            if (password.length >= 8) {
                setErrorMessagePassword('');
                setPassword(password);
            }
            else {
                setErrorMessagePassword('Password is incorrect');
                setDisabled(true);
            }
        }
        if (password.length >= 8 && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setDisabled(false);
        }
    }
    const handleShowPassword = () => {

    }

    return (
        <div>
            <div className='row mx-0' style={{ height: '100vh', width: '100vw' }} >
                <div className='col-md-6 col-xl-6 loginUpdateBox lightGrayBackground'>
                    <div className='loginCardAlign'>
                        <img variant="top" src={globe} a />
                        <div>
                            <h3>enmasse</h3>
                            <p className='text-muted login-p'>
                                Our team of skilled professionals id committed to delivering outstanding advisory services and customer support, enabling you to maximize your investment potential with us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-md-6 loginUpdateBox whiteBackground'>
                    <div className='loginCardAlign'>
                        <h3 className='login-header'>Login</h3>
                        <p className='text-muted mb-4 login-p'>Enter your email ID and Password to login
                        </p>
                        <h5 className='fs-6'>Email</h5>
                        <input type="email" className='my-1 px-2 inputBoxHeight' value={email} placeholder='Enter your email id here' onChange={handleEmailInput} />
                        {errorMessageEmail && <p className='text-danger'>{errorMessageEmail}</p>}
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <h5 className='fs-6'>Password</h5>
                            <p className='underline-text login-p'>Forget password</p>
                        </div>

                        <input type='password' className='my-1 px-2 inputBoxHeight' value={password} placeholder='Enter your password here' minLength="8" onChange={handlePasswordInput} />
                        {errorMessagePassword && <p className='text-danger'>{errorMessagePassword}</p>}
                        {/* <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleShowPassword}
                                        onMouseDown={handleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        /> */}
                        <button className={disabled ? 'mb-2 mt-4 inputBoxHeight login-btn bg-secondary text-white fs-6' : 'mb-2 mt-4 inputBoxHeight login-btn bg-dark text-white fs-6'} disabled={disabled} onClick={handleLoggedIn}>Continue</button>
                        <p className='text-muted mb-0 mt-2 login-p'>By clicking on continue you are agreeing to the Enmasse <a href='/' className='black login-p'>Terms & conditions</a> and <a href='/' className='black'>Privacy policies</a></p>

                        {/* <h3>Login</h3>
                        <p className='paragraph'>Login with the credentials you have received in your mail.</p>
                        <a href="/" className='black request-link'> Request now</a>
                        <h6>Email</h6>
                        <input type="email" className='mediumMarginTopBottom inputBoxHeight login-btn px-3' name="fname" placeholder='Email' />
                        <h6>Password</h6>
                        <input type="password" className='mediumMarginTopBottom inputBoxHeight login-btn px-3' name="fname" placeholder='Password' />
                        <button className='mediumMarginTopBottom inputBoxHeight grayBtnClr login-btn' onClick={handleLoggedIn}>Continue</button>
                        <p>By clicking on continue you are agreeing to the Enmasse <a href='/' className='black'>Terms & conditions</a> and <a href='/' className='black'>Privacy policies</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
