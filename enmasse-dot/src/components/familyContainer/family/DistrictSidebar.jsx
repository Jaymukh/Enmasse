import React, { useState } from 'react';
import { countryData } from '../../../utils/constants/Constants';
import { PiArrowRightBold } from 'react-icons/pi';
import '../../../App.css';

const options = [
    {
        currency: "US Dollar",
        symbol: "$"
    },
    {
        currency: "Indian Rupee",
        symbol: '₹'
    }
]

function DistrictSidebar({ selectedData }) {
    const [currency, setCurrency] = useState("US Dollar");

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <div className='col-3 py-4 bg-white' style={{ height: '98%' }}>
            <div className='d-flex justify-content-between align-items-start'>
                <div>
                    <h6 className='fs-18'>Kutch</h6>
                    <p className='ps-2 fs-14'>Gujarat</p>
                </div>
                <select className='currency-select-box px-2 py-1 fs-12' value={currency} onChange={handleChangeCurrency}>
                    {options.map((option, key) => <option key={key} value={option.currency}>{option.currency} {option.symbol}</option>)}
                </select>
            </div>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 card py-2 text-left' >
                        <h6 className='text-left'>2 Billion</h6>
                        <p className='text-left fontSizeS m-0'>Total Population</p>
                    </div>
                    <div className='col-sm-12 col-md-12	col-lg-6 col-xl-6   my-2 card py-2'>
                        <h6 className='text-left'>800 Million</h6>
                        <p className='text-left fontSizeS m-0'>Households</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center p-2 my-2 tam-info">
                    <div className='col-12 d-flex flex-column align-items-start py-2'>
                        <h6 className='text-left tam-header'>$3 Trillion</h6>
                        <p className='text-left fontSizeS m-0'>Total Addressable Market</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 card py-2' >
                        <h6 className='text-left'>2 Billion</h6>
                        <p className='text-left fontSizeS m-0'>Total Population</p>
                    </div>
                    <div className='col-sm-12 col-md-12	col-lg-6 col-xl-6   my-2 card py-2'>
                        <h6 className='text-left'>800 Million</h6>
                        <p className='text-left fontSizeS m-0'>Households</p>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2 card py-2'>
                        <h6 className='text-left'>500 Million</h6>
                        <p className='text-left fontSizeS m-0'>Entrepreneurial Households</p>
                    </div>
                    <div className='col-sm-12 col-md-12	col-lg-6 col-xl-6  my-2 card py-2'>
                        <h6 className='text-left'>7500 $</h6>
                        <p className='text-left fontSizeS m-0'>Median Annual Household Income</p>
                    </div>
                </div>
            </div>
            {countryData.map((data, key) => {
                return (
                    <div className="card my-3">
                        <div className="container">
                            <h6 className='text-left my-3'>{data.country}</h6>
                            <div className='row'>
                                <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                    <h5 className='text-left'>{data.population}</h5>
                                    <p className='text-left fontSizeXS'>Population</p>
                                </div>
                                <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                    <h5 className='text-left'>{data.annualAverageIncome}</h5>
                                    <p className='text-left fontSizeXS'>Average Annual Income</p>
                                </div>
                                <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                    <h5 className='text-left'>{data.entrepreneurialHouseholds}</h5>
                                    <p className='text-left fontSizeXS'>Enterpreneurial Households</p>
                                </div>
                                <div className="col-sm-12 col-md-12	col-lg-6 col-xl-6 pe-0" >
                                    <h5 className='text-left'>{data.totalAddressableMarket}</h5>
                                    <p className='text-left fontSizeXS'>Total Addressable Market</p>
                                </div>
                            </div>
                        </div>
                        <button className='border-top rounded-0 explore-country-btn' >{data.button}</button>
                    </div>
                );
            })}
            <button className='btn btn-dark rounded w-100'>Explore more<PiArrowRightBold className='ms-4' /></button>
        </div>
    );
}

export default DistrictSidebar;
