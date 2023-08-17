import React from 'react';
import '../../../App.css';
import Box from '@mui/material/Box';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineArrowForward } from 'react-icons/md';
import { families } from '../../../utils/constants/Constants';

function FamilySidePanel({ selectedFamily, selectedData, handleCarouselSlide }) {
    return (
        <div className='col-3 d-flex justify-content-center align-items-center'>
            <Box sx={{ width: '100%', maxWidth: 360, height: '98%', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }} >
                <div className="card bg-white my-6" style={{ width: 'fit-content', height: 'fit-content', marginBottom: '2rem' }}>
                    <h5 className="card-title">Map</h5>
                    <img className="card-img-top" src={selectedData.properties.image} alt="Card" />
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div id="carouselExampleControlsNoTouching" className="carousel slide bgcolor d-flex justify-content-between    custom-carousel bg-white my-6" data-bs-touch="false" data-bs-interval="false" width="20vw" height="8vw" >
                    <div className="carousel-inner">
                        {families.family.map((data, index) => (
                            <div class={`carousel-item ${index === selectedFamily ? ' active' : ''}`} key={index}>
                                <div class="d-flex flex-row align-items-center">
                                    <img src={data.properties.image} width="100" height="100" className="d-block carousel-img" alt="Family Image" />
                                    {/* <div class="carousel-caption d-none d-md-block carousel-caption-margin justify-content-start"> */}
                                    <div class="justify-content-start">
                                        <h5 className='carousel-caption-h'>{data.properties.familyName}</h5>
                                        <p className='carousel-caption-p text-p'>{data.properties.district}, {data.properties.state}, {data.properties.country}</p>
                                        <p className='carousel-caption-p color-green'>View all families</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev PrevBtn" onClick={() => handleCarouselSlide((selectedFamily - 1 + families.family.length) % families.family.length)} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <BiArrowBack class="iconPrevious" aria-hidden="true"></BiArrowBack>
                    </button>

                    <button className="carousel-control-next NextBtn" onClick={() => handleCarouselSlide((selectedFamily + 1 + families.family.length) % families.family.length)} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <MdOutlineArrowForward className="iconNext" width="" aria-hidden="true"></MdOutlineArrowForward>
                    </button>
                </div>
            </Box >
        </div >
    );
}

export default FamilySidePanel;
