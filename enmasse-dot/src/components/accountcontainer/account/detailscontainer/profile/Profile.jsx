import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditProfile from './EditProfile';

export default function Profile() {
    const [name, setName] = useState('John');
    const [email, setEmail] = useState('john@gmail.com');
    const [phone, setPhone] = useState(76545354);
    const [country, setCountry] = useState('India');
    const [company, setCompany] = useState('Tarento');
    const [designation, setDesignation] = useState('Director');
    const [role, setRole] = useState('Admin');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }
    const handleDesignationChange = (e) => {
        setDesignation(e.target.value)
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }

    var [open, setOpen] = useState(false);
    const handleUpdateClick = () => {
        handleDrawer(false);
    };
    const handleDrawer = (open) => {
        setOpen(open);
    }

    return (

        <div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
            <div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4 ">
                <h5 className='mt-2 col-2'>Profile</h5>
                <button className='btn btn-outline-secondary width-fit-content-button' onClick={() => handleDrawer(true)}>
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
            {open && (<EditProfile open={open} handleUpdateClick={handleUpdateClick} handleDrawer={handleDrawer} name={name} email={email} phone={phone} country={country} company={company} designation={designation} role={role} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handlePhoneChange={handlePhoneChange} handleCountryChange={handleCountryChange} handleCompanyChange={handleCompanyChange} handleDesignationChange={handleDesignationChange} handleRoleChange={handleRoleChange} />)}
        </div>
    )
}

