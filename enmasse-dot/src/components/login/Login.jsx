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

                {/* terms and condition  */}
                {/* <div className="modal fade" id="TermsandConditions" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered dialog-width">
                        <div className="modal-content dialog-width">
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-row my-3 mx-3">
                                    <h5 className="modal-title " id="staticBackdropLabel">Terms and Conditions</h5>
                                    <p className='my-2 mx-2 Dialog-p'>Last updated: DD/MM/YYYY</p>
                                </div>
                                <button type="button" className="btn-close my-3 mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex flex-column justify-content-start mx-2">
                                <p className='Dialog-p'>Please read these Terms and Conditions (“Terms”) carefully before using our services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.</p>
                                <h5 className='d-flex justify-content-start'>1. General</h5>
                                <p className='Dialog-p'>1.1 These Terms apply to all users of our services, including but not limited to website visitors, customers, and clients.</p>
                                <p className='Dialog-p'>1.2 Our services may include, but are not limited to, the provision of information, products, and online resources.</p>
                                <p className='Dialog-p'>1.3 We reserve the right to modify, update, or discontinue our services at any time without prior notice.</p>
                                <h5 className='d-flex justify-content-start'>2. Intellectual Property</h5>
                                <p className='Dialog-p'>2.1 All content and materials provided through our services, including but not limited to text, graphics, logos, images, videos, and software, are the property of our company and are protected by applicable intellectual property laws.</p>
                                <p className='Dialog-p'>2.2 You may not reproduce, distribute, modify, display, or use any of our intellectual property without our prior written consent.</p>
                                <h5 className='d-flex justify-content-start'>3. User Responsibilities</h5>
                                <p className='Dialog-p'>3.1 By using our services, you agree to provide accurate and current information and to ensure the security of your account credentials.</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-dark Dialog-btn-width my-2" data-bs-dismiss="modal">Agree</button>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    )
}
