import React from 'react';

function FamilyDetailsContainer({ selectedFamily, selectedData }) {

    return (
        <div className='col-6 py-2' style={{ height: '98%', overflow: 'auto' }}>
            <div className="card mb-3 OneFamilySidePanelWidth my-3">
                <div className='d-flex flex-row mx-2 p-3'>
                    <h5 className="card-title">{selectedData.properties.familyName}</h5>
                    <h6 className="card-title text-muted mx-2 my-1">{selectedData.properties.district}, {selectedData.properties.state}, {selectedData.properties.country}</h6>
                </div>
                <div class="container mx-2">
                    <div class="row">
                        <div class="col-3 d-flex flex-row">
                            <b className="">{selectedData.properties.familyDetails.familyMembers}</b>
                            <p className="card-title text-muted mx-1">Family members</p>
                        </div>
                        <div class="col-4 d-flex flex-row">
                            <b className="color-green">{selectedData.properties.familyDetails.householdSpend}</b>
                            <p className="card-title text-muted mx-1">Household Spend</p>
                        </div>
                        <div class="col-4 d-flex flex-row">
                            <b className="">{selectedData.properties.familyDetails.householdIncome}</b>
                            <p className="card-title text-muted mx-1">Household Income</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <img src={selectedData.properties.image} alt="Girl in a jacket" width="700" height="400" className='imgBorderRadious' />
                    <p className=" card-text OneFamilyCardText p-1 my-2">{selectedData.properties.familyDetails.detail1}</p>
                    <div className='d-flex flex-row justify-content-around'>
                        <img src={selectedData.properties.image} alt="Girl in a jacket" width="330" height="180" className='imgBorderRadious' />
                        <img src={selectedData.properties.image} alt="Girl in a jacket" width="330" height="180" className='imgBorderRadious' />
                    </div>
                    <p className="card-text OneFamilyCardText p-1 my-2">{selectedData.properties.familyDetails.detail2}</p>
                </div>
            </div>
        </div>
    );
}

export default FamilyDetailsContainer;
