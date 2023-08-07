import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Profile() {

    return (

            <div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
                <div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4 ">
                    <h5 className='mt-2 col-2'>Profile</h5>
                    <button className='btn btn-outline-secondary width-fit-content-button'>
                        <ModeEditIcon />
                        Edit Profile
                    </button>
                </div>
                <hr />
                <div className="row w-100 h-90">
                    <div className="col-2">
                        <img src="" alt="" />
                    </div>
                    <div className="col-4">
                        <ul className='edit-profile-list'>
                            <li >
                                <p className="text-muted fs-6  mb-0">Name</p>
                                <p className="text-dark">John</p>
                            </li>
                            <li >
                                <p className="text-muted fs-6  mb-0">Phone</p>
                                <p className="text-dark">9973487352</p>
                            </li>
                            <li >
                                <p className="text-muted fs-6  mb-0">Company Name</p>
                                <p className="text-dark">Tarento</p>
                            </li>
                            <li >
                                <p className="text-muted fs-6  mb-0">Role</p>
                                <p className="text-dark">Admin</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className='edit-profile-list'>
                            <li >
                                <p className="text-muted fs-6  mb-0">Email Id</p>
                                <p className="text-dark">John@gmail.com</p>
                            </li>
                            <li >
                                <p className="text-muted fs-6  mb-0">Location</p>
                                <p className="text-dark">Bangalore</p>
                            </li>
                            <li >
                                <p className="text-muted fs-6  mb-0">Designation</p>
                                <p className="text-dark">Director</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



    )
}

