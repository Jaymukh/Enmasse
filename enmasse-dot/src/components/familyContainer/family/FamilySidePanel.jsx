import React from 'react';
import '../../../App.css';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineArrowForward } from 'react-icons/md';
import { families } from '../../../utils/constants/Constants';
import { FiArrowRight } from 'react-icons/fi';
import FamiliesSidePanel from '../families/FamiliesSidePanel';

function FamilySidePanel({ selectedFamily, selectedData, handleCarouselSlide }) {
    return (
        <div className='col-3 d-flex mt-1 flex-column'>
            {/* <div className="card fam-details-card bg-white my-6 pt-3 d-flex flex-column justify-content-center align-items-center"
                style={{ width: 'auto', height: '20rem', marginBottom: '2rem' }}
            >
                <h6 className="card-title">Static Map will display here</h6>
            </div> */}
            <FamiliesSidePanel />
            <div id="carouselExampleControlsNoTouching" className="carousel slide bgcolor d-flex justify-content-between custom-carousel bg-white m-3" data-bs-touch="false" data-bs-interval="false" width="20vw" height="8vw" >
                <div className="carousel-inner">
                    {families.family.map((data, index) => (
                        <div class={`carousel-item ${index === selectedFamily ? ' active' : ''}`} key={index}>
                            <div class="d-flex flex-row align-items-center">
                                <img src={data.properties.image} width="100" height="100" className="d-block carousel-img" alt="Family Image" />
                                <div class="d-flex flex-column align-items-start justify-content-center ms-2">
                                    <h5 className='carousel-caption-h fs-18 text-start m-0'>{data.properties.familyName}</h5>
                                    <p className='carousel-caption-p text-p fs-14 text-start m-0 py-1'>{data.properties.district}, {data.properties.state}, {data.properties.country}</p>
                                    <button className='border-0 bg-white carousel-caption-p color-green m-0 fs-12 p-0'>View all families<FiArrowRight className='ms-1' /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev PrevBtn" onClick={() => handleCarouselSlide((selectedFamily - 1 + families.family.length) % families.family.length)} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <BiArrowBack class="iconNextPrev" aria-hidden="true"></BiArrowBack>
                </button>

                <button className="carousel-control-next NextBtn" onClick={() => handleCarouselSlide((selectedFamily + 1 + families.family.length) % families.family.length)} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <MdOutlineArrowForward className='iconNextPrev' fontSize={20} aria-hidden="true"></MdOutlineArrowForward>
                </button>
            </div>
        </div >
    );
}

export default FamilySidePanel;
