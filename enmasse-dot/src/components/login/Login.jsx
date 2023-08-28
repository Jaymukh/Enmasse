import '../../App.css';
import React, { useState } from 'react';
import globe from '../../utils/images/globe.png';
import ForgotPassword from './ForgotPassword';
import EmailSent from './EmailSent';
import TermsAndConditions from './TermsAndConditions';

export default function Login({ handleLoggedIn }) {
    // login component
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
    // forgot password

    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [forgotPasswordEmailError, setForgotPasswordEmailError] = useState('');
    const [disabledSendEmail, setDisabledSendEmail] = useState(true);
    const [showEmailSentModal, setShowEmailSentModal] = useState(false); // SentMail Model
    const [showTermsAndConditionsModal, setShowTermsAndConditionsModal] = useState(false); // TermsAndConditions

    const openForgotPasswordModal = () => {
        setShowForgotPasswordModal(true);
    };

    const closeForgotPasswordModal = () => {
        setShowForgotPasswordModal(false);
        setForgotPasswordEmail('');
        setForgotPasswordEmailError('');
    };

    const handleForgotPasswordEmailInput = (event) => {
        const forgotPasswordEmail = event.target.value;
        setForgotPasswordEmail(forgotPasswordEmail);
        setForgotPasswordEmailError('');
        setDisabledSendEmail(true);
        if (forgotPasswordEmail) {
            if (forgotPasswordEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                setForgotPasswordEmail(forgotPasswordEmail);
                setForgotPasswordEmailError('');
                setDisabledSendEmail(false)
            }
            else {
                setForgotPasswordEmailError('Enter a valid email.');
                setDisabledSendEmail(true);
            }
        }
    }

    const handleSendEmail = () => {
        setShowForgotPasswordModal(false);
        setShowEmailSentModal(true);
    };
    // Sent Mail Model
    const closeEmailSentModal = () => {
        setShowEmailSentModal(false);
        setForgotPasswordEmail('');
        setDisabledSendEmail(true);
    };
    // TermsAndConditions Model
    const openTermsAndConditionsModal = () => {
        setShowTermsAndConditionsModal(true);
    };
    const closeTermsAndConditionsModal = () => {
        setShowTermsAndConditionsModal(false);
    };

    return (
        <div>
            <div className='row mx-0' style={{ height: '100vh', width: '100vw' }} >
                <div className='col-md-6 col-xl-6 login-update-box lightGrayBackground'>
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
                <div className='col-md-6 col-md-6 login-update-box whiteBackground'>
                    <div className='loginCardAlign'>
                        <h3 className='login-header'>Login</h3>
                        <p className='text-muted mb-4 login-p'>Enter your email ID and Password to login
                        </p>
                        <h5 className='fs-6'>Email</h5>
                        <input type="email" className='my-1 px-2 inputBoxHeight' value={email} placeholder='Enter your email id here' onChange={handleEmailInput} />
                        {errorMessageEmail && <p className='text-danger'>{errorMessageEmail}</p>}
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <h5 className='fs-6'>Password</h5>
                            <button className='bg-transparent underline-text border-0' onClick={() => openForgotPasswordModal(true)}>Forgot password?</button>
                        </div>
                        <input type='password' className='my-1 px-2 inputBoxHeight' value={password} placeholder='Enter your password here' minLength="8" onChange={handlePasswordInput} />
                        {errorMessagePassword && <p className='text-danger'>{errorMessagePassword}</p>}
                        <button className={disabled ? 'mb-2 mt-4 inputBoxHeight login-btn bg-secondary text-white fs-6' : 'mb-2 mt-4 inputBoxHeight login-btn bg-dark text-white fs-6'} disabled={disabled} onClick={() => handleLoggedIn(true)}>Continue</button>
                        {/* <p className='text-muted mb-0 mt-2 login-p'>By clicking on continue you are agreeing to the Enmasse <a href='/' className='black login-p'>Terms & conditions</a> and <a href='/' className='black' >Privacy policies</a></p> */}

                        <p className='text-muted mb-0 mt-2 login-p'>By clicking on continue you are agreeing to the Enmasse
                            <button className='bg-transparent black underline-text border-0' onClick={() => openTermsAndConditionsModal(true)} >Terms & conditions</button>
                            and <button className='bg-transparent black underline-text border-0' onClick={() => openTermsAndConditionsModal(true)} >Privacy policies</button>
                        </p>
                    </div>
                </div>

                {showForgotPasswordModal && (
                    <ForgotPassword closeForgotPasswordModal={closeForgotPasswordModal}
                        showForgotPasswordModal={showForgotPasswordModal}
                        handleForgotPasswordEmailInput={handleForgotPasswordEmailInput}
                        forgotPasswordEmail={forgotPasswordEmail}
                        forgotPasswordEmailError={forgotPasswordEmailError}
                        disabledSendEmail={disabledSendEmail}
                        handleSendEmail={handleSendEmail} />
                )}

                {showEmailSentModal && (
                    <EmailSent
                        showEmailSentModal={showEmailSentModal}
                        closeEmailSentModal={closeEmailSentModal}
                        forgotPasswordEmail={forgotPasswordEmail}
                    />
                )}

                {showTermsAndConditionsModal && (
                    <TermsAndConditions
                        openTermsAndConditionsModal={openTermsAndConditionsModal}
                        closeTermsAndConditionsModal={closeTermsAndConditionsModal}
                        showTermsAndConditionsModal={showTermsAndConditionsModal}
                    />
                )}
            </div>
        </div>
    )
}
