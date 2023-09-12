import React, { useEffect, useState } from 'react';
import '../../../../../App.css';
import Drawer from '@mui/material/Drawer';
import { AiOutlineClose } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';
import { GoCheckCircleFill } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useUserService } from '../../../../../services';
import { useRecoilValue } from 'recoil';
import { toast } from "react-toastify";
import { authState } from '../../../../../states';
import UpdateSuccessModal from './UpdateSuccessModel';

const ChangePassword = ({ open, handleUpdateClick, handleDrawer, handleShowModal }) => {
    const userService = useUserService();
    const auth = useRecoilValue(authState);

    const [filledInputCount, setFilledInputCount] = useState(0);

    const validationSchema = Yup.object().shape({
        current_password: Yup.string()
            .required('Current password is required'),
        new_password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
            .matches(/[0-9]/, 'Password must contain at least one number'),
        confirm_new_password: Yup.string()
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const { handleSubmit, register, watch, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const { errors, isSubmitting } = formState;

    const [conditions, setConditions] = useState({
        length: false,
        uppercase: false,
        specialChar: false,
        number: false,
    });

    const updateObject = watch();

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setConditions({
            lengthCheck: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
            number: /\d/.test(newPassword),
        });
    };

    const onSubmit = (values) => {
        if (Object.values(errors).length > 0) {
            return;
        }
        userService.changePassword({ ...values, refresh: auth?.tokens?.refresh })
            .then(response => {
                handleDrawer(false);
                handleShowModal(true);
            })
            .catch(error => toast.error(error));
    };


    useEffect(() => {
        const values = watch(); // Get all form values
        const count = Object.values(values).filter(Boolean).length;  //`Boolean` is called as a function and it converts its argument into a boolean value. 
        setFilledInputCount(count);
    }, [updateObject, watch]);

    return (
        <div className=''>
            <Drawer
                anchor='right'
                open={open}
                onClose={() => handleDrawer(false)}
                className='edit-profile-drawer-width edit-profile-drawer-padding font-poppins'
            >
                <div className='d-flex flex-wrap justify-content-between mb-2'>
                    <h5 className='fs-21 m-0'>
                        Change Password
                    </h5>
                    <button className='bg-white border-0' onClick={() => handleDrawer(false)}>
                        <AiOutlineClose />
                    </button>
                </div>
                <p className='text-muted fs-14'>You will be required to re-login after updating the password.</p>
                <form className='d-flex justify-content-center flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='fs-14 m-0' required>Old Password</h5>
                    <input
                        type="password"
                        name='current_password'
                        {...register("current_password")}
                        className='mediumMarginTopBottom inputBoxHeight my-1 px-3'
                        placeholder='Password'
                    />
                    {errors?.current_password?.message && <p className='text-danger m-0 p-0'>{errors?.current_password?.message}</p>}
                    <h5 className='fs-14 mx-0 mt-2 mb-0' required>New Password</h5>
                    <input
                        type="password"
                        name='new_password'
                        {...register("new_password", {
                            onChange: (e) => {
                                handlePasswordChange(e)
                            }
                        })}
                        className='mediumMarginTopBottom inputBoxHeight my-1 px-3'
                        placeholder='Password'
                    />
                    {errors?.new_password?.message && <p className='text-danger m-0 p-0'>{errors?.new_password?.message}</p>}
                    <div className="row my-2">
                        <div className="d-flex pe-0 mb-1">
                            {conditions.lengthCheck ? <GoCheckCircleFill color='#108041' /> : <GiPlainCircle color='#CECECE' />}
                            <p className='fs-12 ms-2 mb-1'>8 Characters</p>
                        </div>
                        <div className="d-flex pe-0 mb-1">
                            {conditions.uppercase ? <GoCheckCircleFill color='#108041' /> : <GiPlainCircle color='#CECECE' />}
                            <p className='fs-12 ms-2 mb-1'>Contains Uppercase</p>
                        </div>
                        <div className="d-flex pe-0 mb-1">
                            {conditions.specialChar ? <GoCheckCircleFill color='#108041' /> : <GiPlainCircle color='#CECECE' />}
                            <p className='fs-12 ms-2 mb-1'>Contains Special character</p>
                        </div>
                        <div className="d-flex pe-0 mb-1">
                            {conditions.number ? <GoCheckCircleFill color='#108041' /> : <GiPlainCircle color='#CECECE' />}
                            <p className='fs-12 ms-2 mb-1'>Contains Number</p>
                        </div>
                    </div>
                    <h5 className='fs-14 m-0' required>Re enter new password</h5>
                    <input
                        type="password"
                        name='confirm_new_password'
                        {...register("confirm_new_password")}
                        className='my-2 inputBoxHeight px-3'
                        placeholder='Password'
                    />
                    {errors?.confirm_new_password?.message && <p className='text-danger m-0 p-0'>{errors?.confirm_new_password?.message}</p>}
                    <button
                        type="submit"
                        className='mediumMarginTopBottom inputBoxHeight text-white my-2 border-0 bg-dark'
                    // className={`mediumMarginTopBottom inputBoxHeight text-white my-2 border-0 ${(filledInputCount < 3) ? 'bg-secondary' : 'bg-dark'}`}
                    // disabled={filledInputCount < 3} 
                    >
                        {isSubmitting && <span className="spinner-border spinner-border-sm me-3"></span>}
                        Update
                    </button>
                </form>
            </Drawer>
        </div>
    );
}

export default ChangePassword;