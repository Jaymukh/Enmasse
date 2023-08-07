import '../App.css';
import React, { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { BiSolidInfoCircle } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';
import * as Constants from '../utils/constants/Constants';

export default function InsightBar() {
    var [visible, setVisible] = useState(false);

    const onDialog = (event) => {
        setVisible(!visible);
    };

    return (
        <div className='d-flex flex-row align-items-center'>
            <button onClick={onDialog} className='SideBarIcon' >
                {visible ? <MdOutlineNavigateNext size={25} /> : <MdOutlineNavigateBefore size={25} />}
            </button>
            <div className={`SideBar ${visible ? "sidebar-visible" : "sidebar-not-visible"}`}>
                <div visible={visible} className='SideBarContent'>
                    <div className='p-4'>
                        <div className='global-info'>
                            <h6 className='text-start my-3 fw-bold'>EnMasses Thesis</h6>
                            <div className='p-2 my-2 tam-info'>
                                <div className="row align-items-center justify-content-center">
                                    <div className='col-10 d-flex flex-column align-items-start py-2'>
                                        <h6 className='text-start tam-header'>$3 Trillion</h6>
                                        <p className='text-start fontSizeS m-0'>Total Addressable Market</p>
                                    </div>
                                    <div className='col-2'>
                                        <BiSolidInfoCircle size={25} />
                                    </div>
                                </div>
                            </div>
                            <div className='row align-items-center justify-content-around' >
                                <div className=' col-6 card global-sub-info my-2 d-flex flex-column align-items-start py-2' >
                                    <h6 className='text-start'>2 Billion</h6>
                                    <p className='text-start fontSizeS m-0'>Total Population</p>
                                </div>
                                <div className=' col-6 card global-sub-info my-2 d-flex flex-column align-items-start py-2'>
                                    <h6 className='text-start'>800 Million</h6>
                                    <p className='text-start fontSizeS m-0'>Households</p>
                                </div>
                                <div className=' col-6 card global-sub-info my-2 d-flex flex-column align-items-start py-2'>
                                    <h6 className='text-start'>500 Million</h6>
                                    <p className='text-start fontSizeS m-0'>Entrepreneurial Households</p>
                                </div>
                                <div className=' col-6 card global-sub-info my-2 d-flex flex-column align-items-start py-2'>
                                    <h6 className='text-start'>7500 $</h6>
                                    <p className='text-start fontSizeS m-0'>Median Annual Household Income</p>
                                </div>
                            </div>
                        </div>
                        {Constants.countryData.map((data, key) => {
                            return (
                                <div className="card country-wise-info my-3">
                                    <div className="container">
                                        <h6 className='text-start my-3'>{data.country}</h6>
                                        <div className='row'>
                                            <div className="col-6 pe-0" >
                                                <h5 className='text-start'>{data.population}</h5>
                                                <p className='text-start fontSizeXS'>Population</p>
                                            </div>
                                            <div className="col-6 pe-0" >
                                                <h5 className='text-start'>{data.annualAverageIncome}</h5>
                                                <p className='text-start fontSizeXS'>Average Annual Income</p>
                                            </div>
                                            <div className="col-6 pe-0" >
                                                <h5 className='text-start'>{data.entrepreneurialHouseholds}</h5>
                                                <p className='text-start fontSizeXS'>Enterpreneurial Households</p>
                                            </div>
                                            <div className="col-6 pe-0" >
                                                <h5 className='text-start'>{data.totalAddressableMarket}</h5>
                                                <p className='text-start fontSizeXS'>Total Addressable Market</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='border-top rounded-0 explore-country-btn' >{data.button}</button>
                                </div>
                            );
                        })}
                    </div>
                    <button className='btn btn-dark rounded w-100'>Explore more<FiArrowRight className='ms-2'/></button>
                </div>
            </div>
        </div>
    )
}