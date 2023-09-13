import React, { useState } from 'react'
import { MdModeEdit } from 'react-icons/md';
import EditProfile from './EditProfile';
import '../../../../../App.css';
import { useRecoilValue } from "recoil";
import { loggedUserState } from "../../../../../states";
import { useUserService } from '../../../../../services';
import { toast } from 'react-toastify';

export default function Profile() {

    // function for EditInvite dialog
    const [selectedData, setSelectedData] = useState(null);
    const loggedUser = useRecoilValue(loggedUserState);
    const [open, setOpen] = useState(false);
    const userService = useUserService();

    const handleEditClick = () => {
        setSelectedData({ ...loggedUser });
    };

    const handleOpen = (flag) => {
        if (flag) {
            setSelectedData(loggedUser);
            setOpen(flag);
        } else {
            setSelectedData(null);
            setOpen(flag);
        }
    }

    const handleCloseDialog = () => {
        setSelectedData(null);
    };

    const handleUpdate = (updatedData) => {
        const payload = { ...updatedData, country: 'India' };
        userService.updateUserDetails(payload)
            .then((response) => {
                if (response) {
                    handleCloseDialog();
                    userService.getUserDetails();
                }
            })
            .catch(error => {
                toast.error(error);
            });
    };

    return (
        <div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
            <div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4">
                <h5 className='mt-2 col-2'>Profile</h5>
                <button className='btn btn-outline-secondary width-fit-content-button fs-13' onClick={() => handleOpen(true)}>
                    <MdModeEdit className='me-1 mb-1 color-black' fontSize={20} />
                    Edit Profile
                </button>
            </div>
            <hr />
            <div className="row w-100">
                <div className="col-3 d-flex justify-content-center">
                    <img src="" alt="Profile Photo" className='profile-image-box' />
                </div>
                <div className="col-4">
                    <ul className='edit-profile-list'>
                        <li >
                            <p className="text-muted fs-6  mb-0">Name:</p>
                            <p className="color-black">{loggedUser.name}</p>
                        </li>
                        <li >
                            <p className="text-muted fs-6  mb-0">Company Name:</p>
                            <p className="color-black">{loggedUser.company}</p>
                        </li>
                        <li >
                            <p className="text-muted fs-6  mb-0">Phone Number:</p>
                            <p className="color-black">{loggedUser.phone_number}</p>
                        </li>
                        <li >
                            <p className="text-muted fs-6  mb-0">Role:</p>
                            <p className="color-black">{loggedUser.role}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul className='edit-profile-list'>
                        <li >
                            <p className="text-muted fs-6  mb-0">Email Id:</p>
                            <p className="color-black">{loggedUser.email_id}</p>
                        </li>
                        <li >
                            <p className="text-muted fs-6  mb-0">Designation:</p>
                            <p className="color-black">{loggedUser.designation}</p>
                        </li>
                        <li >
                            <p className="text-muted fs-6  mb-0">Country:</p>
                            <p className="color-black">{loggedUser.country}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {open &&
                (<EditProfile
                    selectedData={selectedData}
                    handleUpdate={handleUpdate}
                    open={open}
                    handleOpen={handleOpen}
                />)
            }
        </div>
    )
}