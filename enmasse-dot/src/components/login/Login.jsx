import '../../App.css';
import React, { useState, useEffect } from 'react';
import globe from '../../utils/images/globe.png';
import ForgotPassword from './ForgotPassword';
import EmailSent from './EmailSent';
import TermsAndConditions from './TermsAndConditions';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useUserService } from '../../services';


export default function Login() {
    const userService = useUserService();
    const [email, setEmail] = useState('');
    const [filledInputCount, setFilledInputCount] = useState(0);
    const [showModal, setShowModal] = useState({
        passwordModal: false,
        sendMailModal: false,
        tncModal: false
    })

    const validationSchema = Yup.object().shape({
        email_id: Yup.string().required('Username is required').email("Username is not a valid email"),
        password: Yup.string().required('Password is required')
    });

    const { handleSubmit, register, errors, watch } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const updateObject = watch();

    const onSubmit = (values) => {
        userService.login(values);
    }

    const handleModal = (value) => {
        setShowModal({ ...showModal, ...value });
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handleSendEmail = () => {
        setEmail('');
        handleModal({ passwordModal: false });
    }

    useEffect(() => {
        const values = watch(); // Get all form values
        const count = Object.values(values).filter(Boolean).length;  //`Boolean` is called as a function and it converts its argument into a boolean value. 
        setFilledInputCount(count);
    }, [updateObject, watch]);

    return (
        <div>
            <div className='row mx-0' style={{ height: '100vh', width: '100vw' }} >
                <div className='col-md-6 col-xl-6 login-update-box lightGrayBackground'>
                    <div className='loginCardAlign'>
                        <img variant="top" src={globe} />
                        <div>
                            <h3>enmasse</h3>
                            <p className='text-muted login-p'>
                                Our team of skilled professionals id committed to delivering outstanding advisory services and customer support, enabling you to maximize your investment potential with us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-md-6 login-update-box whiteBackground'>
                    <div className='loginCardAlign' >
                        <h3 className='login-header'>Login</h3>
                        <p className='text-muted mb-4 login-p'>Enter your email ID and Password to login
                        </p>
                        <form className='loginCardAlign w-100' onSubmit={handleSubmit(onSubmit)}>
                            <h5 className='fs-6'>Email</h5>
                            <input
                                type="email"
                                name='email_id'
                                {...register("email_id")}
                                className='my-1 px-2 inputBoxHeight'
                                placeholder='Enter your email id here' />
                            {/* {errorMessageEmail && <p className='text-danger'>{errorMessageEmail}</p>} */}
                            <div className='d-flex flex-row justify-content-between mt-3'>
                                <h5 className='fs-6'>Password</h5>
                                <button className='bg-transparent underline-text border-0' onClick={() => handleModal({ passwordModal: true })}>Forgot password?</button>
                            </div>
                            <input
                                type='password'
                                name='password'
                                {...register("password")}
                                className='my-1 px-2 inputBoxHeight'
                                placeholder='Enter your password here' />
                            {/* {errorMessagePassword && <p className='text-danger'>{errorMessagePassword}</p>} */}
                            <button
                                type='submit'
                                className={`mb-2 mt-4 inputBoxHeight login-btn text-white fs-6 bg-secondary ${(filledInputCount < 2) ? 'bg-secondary' : 'bg-dark'}`}
                                disabled={filledInputCount < 2}
                            >
                                Continue
                            </button>
                        </form>
                        {/* <p className='text-muted mb-0 mt-2 login-p'>By clicking on continue you are agreeing to the Enmasse <a href='/' className='black login-p'>Terms & conditions</a> and <a href='/' className='black' >Privacy policies</a></p> */}

                        <p className='text-muted mb-0 mt-2 login-p'>By clicking on continue you are agreeing to the Enmasse
                            <button className='bg-transparent black underline-text border-0' onClick={() => handleModal({ tncModal: true })} >Terms & conditions</button>
                            and <button className='bg-transparent black underline-text border-0' onClick={() => handleModal({ tncModal: true })} >Privacy policies</button>
                        </p>
                    </div>
                </div>

                {showModal?.passwordModal && (
                    <ForgotPassword
                        showModal={showModal?.passwordModal}
                        handleModal={handleModal}
                        email={email}
                        handleEmailChange={handleEmailChange}
                        handleSendEmail={handleSendEmail}
                    />
                )}

                {showModal?.sendMailModal && (
                    <EmailSent
                        showModal={showModal?.sendMailModal}
                        handleModal={handleModal}
                    />
                )}

                {showModal.tncModal && (
                    <TermsAndConditions
                        showModal={showModal?.tncModal}
                        handleModal={handleModal}
                    />
                )}
            </div>
        </div>
    )
}
