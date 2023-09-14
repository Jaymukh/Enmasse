import '../App.css';
import React, { useState } from 'react';
import * as Constants from '../utils/constants/Constants';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const options = [
    {
        currency: "US Dollar",
        symbol: "$"
    },
    {
        currency: "Indian Rupee",
        symbol: '₹'
    }
];

export default function InsightBar() {
    const [visible, setVisible] = useState(true);
    var navigate = useNavigate();
    const [currency, setCurrency] = useState("US Dollar");

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    }

    const onDialog = () => {
        setVisible(!visible);
    };

    const handleBtnPress = () => {
        navigate(RouteConstants.dashboards);
    }

    return (
        // <div className={visible ? 'sideBar-parent-expended' : 'sideBar-parent-collapsed'} >
        <div className='sideBar-parent-expended py-4 me-3' style={{overflow: 'auto', overflowX: 'hidden'}} >
            {/* <button onClick={onDialog} className='btn-white SideBarIcon'>
                {visible ? <BiSolidChevronRightCircle size={35} /> : <BiSolidChevronLeftCircle size={35} />}
            </button> */}

            {/* <div className='py-4 px-2 bg-white px-0' style={{ height: '98%', overflow: 'auto' }}> */}
            <div className='d-flex justify-content-between align-items-start px-3'>
                <div className='d-flex justify-content-start'>
                    <h6 className='me-2 ms-1 fs-18'>EnMasses Thesis</h6>
                    <AiOutlineInfoCircle fontSize={20} color='#606060' />
                </div>
                <select className='currency-select-box px-2 py-1 fs-11' value={currency} onChange={handleChangeCurrency}>
                    {options.map((option, key) => <option key={key} value={option.currency}>{option.currency} {option.symbol}</option>)}
                </select>
            </div>
            {Constants.countryData.map((data, key) => (
                <>
                    <h6 className='fs-16 text-start px-3 my-1 ms-1'>{data.country}</h6>
                    <div className="row d-flex justify-content-center py-2">
                        <div className='col-sm-11 col-md-11 col-lg-5 col-xl-5 mx-2 my-2 card py-2 d-flex align-items-start text-start' >
                            <h6 className='fs-14'>{data.households}</h6>
                            <p className='fs-11 m-0'>Total Households</p>
                        </div>
                        <div className='col-sm-11 col-md-11	col-lg-5 col-xl-5 mx-2 my-2 card py-2 d-flex align-items-start text-start'>
                            <h6 className='fs-14'>{data.population}</h6>
                            <p className='fs-11 m-0'>Total Population</p>
                        </div>
                        <div className='col-11 p-0 d-flex flex-column align-items-center justify-content-center text-start py-2'>
                            <div className='tam-info-grey p-2 d-flex flex-column justify-content-center'>
                                <h6 className='text-left fs-18'>{data.tam}</h6>
                                <p className='fs-11 m-0'>Total Addressable Market</p>
                            </div>
                        </div>
                        <div className='col-sm-11 col-md-11 col-lg-5 col-xl-5 mx-2 my-2 card py-2 d-flex align-items-start text-start' >
                            <h6 className='fs-14 insight-bar-green-color'>{data.entrepreneurialHouseholds}</h6>
                            <p className='fs-11 m-0'>Number of Entrepreneurial Households (EH)</p>
                        </div>
                        <div className='col-sm-11 col-md-11	col-lg-5 col-xl-5 mx-2 my-2 card py-2 d-flex align-items-start text-start'>
                            <h6 className='fs-14 insight-bar-green-color'>{data.medianSpendonCoreSoln}</h6>
                            <p className='fs-11 m-0'>Median Annual EH Household Spend</p>
                        </div>
                    </div>
                </>))
            }
            {/* </div> */}

            {/* <div className='SideBar'>
                <h6 className='text-start my-3'>EnMasses Thesis</h6>
                <div className='SideBarContent'>
                    <div className='p-2'>
                        <div className='container'>                            
                            <div className="row align-items-center justify-content-center p-2 my-2 tam-info">
                                <div className='col-10 d-flex flex-column align-items-start py-2'>
                                    <h6 className='text-start tam-header'>$3 Trillion</h6>
                                    <p className='text-start fontSizeS m-0'>Total Addressable Market</p>
                                </div>
                                <div className='col-2'>
                                    <BiSolidInfoCircle size={25} />
                                </div>
                            </div>                            
                        </div>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 card py-2' >
                                    <h6 className='text-start'>2 Billion</h6>
                                    <p className='text-start fontSizeS m-0'>Total Population</p>
                                </div>
                                <div className='col-sm-12 col-md-12	col-lg-6 col-xl-6   my-2 card py-2'>
                                    <h6 className='text-start'>800 Million</h6>
                                    <p className='text-start fontSizeS m-0'>Households</p>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 card py-2'>
                                    <h6 className='text-start'>500 Million</h6>
                                    <p className='text-start fontSizeS m-0'>Entrepreneurial Households</p>
                                </div>
                                <div className='col-sm-12 col-md-12	col-lg-6 col-xl-6  my-2 card py-2'>
                                    <h6 className='text-start'>7500 $</h6>
                                    <p className='text-start fontSizeS m-0'>Median Annual Household Income</p>
                                </div>
                            </div>
                        </div>
                        {Constants.countryData.map((data, key) => {
                            return (
                                <div className="card my-3">
                                    <div className="container">
                                        <h6 className='text-start my-3'>{data.country}</h6>
                                        <div className='row'>
                                            <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                                <h5 className='text-start'>{data.population}</h5>
                                                <p className='text-start fontSizeXS'>Population</p>
                                            </div>
                                            <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                                <h5 className='text-start'>{data.annualAverageIncome}</h5>
                                                <p className='text-start fontSizeXS'>Average Annual Income</p>
                                            </div>
                                            <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                                <h5 className='text-start'>{data.entrepreneurialHouseholds}</h5>
                                                <p className='text-start fontSizeXS'>Enterpreneurial Households</p>
                                            </div>
                                            <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
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
                    <button className='btn btn-dark rounded w-100' onClick={() => handleBtnPress()} >Explore more<FiArrowRight className='ms-2' /></button>
                </div>
            </div> */}
        </div>
    )
}