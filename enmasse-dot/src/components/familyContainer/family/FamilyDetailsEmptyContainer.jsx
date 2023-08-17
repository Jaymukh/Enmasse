import React from 'react';
// import img1 from './images/img1.png';

export default function FamilyDetailsEmptyContainer({ selectedData }) {
    return (
        <div className='col-6 py-2' style={{ height: '98%', overflow: 'auto' }}>
            <div className='card mb-3 OneFamilySidePanelWidth my-3'>
                <div className='d-flex flex-row mx-2 p-3'>
                    <h5 className="card-title">{selectedData.properties.familyName}</h5>
                    <h6 className="card-title text-muted mx-2 my-1">{selectedData.address}</h6>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img src={selectedData.properties.image} alt="Girl in a jacket" width="330" height="180" className='imgBorderRadious' />
                    <p className=" card-text OneFamilyCardText p-1 my-2">Building conversations, capturing stories</p>
                    <button>View all families</button>
                </div>
            </div>
        </div >
    )
}