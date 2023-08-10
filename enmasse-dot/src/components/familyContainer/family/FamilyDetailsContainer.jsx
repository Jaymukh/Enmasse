import React from 'react';
import { Data } from '../../jsonData';

function DetailsContainer() {

    return (
        <div className='col-9 py-2' style={{height:'98%'}}>
            <h5 className="text-left">Families in {Data.families.place}</h5>
            <div className=' w-100 h-100 mb-6' style={{ overflow:'auto'}}>
                <div className='row mb-6' style={{marginBottom: '5rem'}}>
                    {Data.families.family.map((data) => (
                        <div className='col-4'>
                            <div className="card m-2">
                                <img className="" style={{ width: '100% !important', height: '60% !important', objectFit: 'cover !important' }} src={data.image} alt="Family image" />
                                <div class="card-body">
                                    <h5 className="card-title text-left">{data.familyName}</h5>
                                    <p className="card-text text-left">{data.address}</p>
                                    <p className="card-text text-left">
                                        Family Members : <b>{data.familyMembers}</b><br />
                                        Household Spend : <b className='text-success'>{data.householdSpend}</b><br />
                                        Household Income : <b>{data.householdIncome}</b>
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

export default DetailsContainer;
