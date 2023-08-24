import React from 'react';
import { families } from '../../../utils/constants/Constants';

function FamiliesDetailsContainer({ handleFamilyVisible }) {

    return (
        <div className='col-9 py-2 mb-6 h-100' style={{ height: '98%' }}>
            <h5 className="text-start">Families in {families.place}</h5>
            <div className=' w-100 h-100 mb-6' style={{ overflow: 'auto' }}>
                <div className='row mb-6' style={{ marginBottom: '5rem' }}>
                    {families.family.map((data, index) => (
                        <div className='col-4'>
                            <div className="card m-2" onClick={() => handleFamilyVisible(index)}>
                                <img className="" style={{ width: '100% !important', height: '60% !important', objectFit: 'cover !important' }} src={data.properties.image} alt="Family image" />
                                <div className="card-body">
                                    <h5 className="card-title text-left">{data.properties.familyName}</h5>
                                    <p className="card-text text-left">{data.properties.district}, {data.properties.state}, {data.properties.country}</p>
                                    <p className="card-text text-left">
                                        <b>{data.properties.familyMembers}</b> Family Members <br />
                                        <b className='text-success'>{data.properties.householdSpend} </b> Household Spend<br />
                                        <b>{data.properties.householdIncome}</b> Household Income
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FamiliesDetailsContainer;
