import React from 'react';
import '../../App.css';
import img5 from '../../utils/images/img5.png'
export default function ISPInfographic({handleInfographic, handleOverlay}) {

  return (
    <div className=''>
       <div className='bg-black-opacity d-flex flex-row justify-content-center'>
          <div className='d-flex flex-column justify-content-right EHinfograpic-div-2'>
            <h5 className='color-white justify-content-start'>Contextual Information Feed</h5>
            {/* <h2 className='color-white'>Entrepreneurial households</h2> */}
            <p className='color-white'>An expandable summary screen inclusive of demographic and characteristic activity of the region of opportunity</p>
            <div className='d-flex justify-content-between '>
                <button className='border-0 bg-transparent text-white px-4 py-2 rounded-1' onClick={() => handleOverlay(false)}>Skip</button>
                <button className="btn btn-light btn-height" onClick={() => handleInfographic(3)}>Next</button>
            </div>
          </div>
          <img src={img5} alt="Image 5" width="300" height="300" className='contextualinfo' />
       </div>
    </div>
  )
}