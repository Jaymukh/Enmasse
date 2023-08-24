import '../../styles/headercontainer/ExploreNow.css';
import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import * as Constants from '../../utils/constants/Constants';

function ExploreNow() {

	return (
		<div>
			<button
				className='btn btn-black me-2'
				data-bs-toggle="modal" 
				data-bs-target="#ExploreNow"
			>
				<MdOutlineTravelExplore className='me-2' fontSize={20} />
				Explore Now
			</button>
			<div className="modal fade" id="ExploreNow" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered dialog-width">
					<div className="modal-content dialog-width">
						<div className="d-flex flex-row justify-content-between">
							<h5 className="modal-title my-3 mx-4" id="staticBackdropLabel">Explore Now</h5>
							<button type="button" className="btn-close my-3 mx-3" data-bs-dismiss="modal" aria-label="Close">
							</button>
						</div>
						<div className="modal-body d-flex flex-column justify-content-start mx-2">
							<p className='Dialog-p'>Explore the available list of regions in our platform. Our team is working on getting more regions unlocked for you !</p>
							<Stack sx={{ width: 500, height:'1rem' , marginBottom: '2rem', marginTop: '1rem'}}>
								<Autocomplete
									id="free-solo-demo"
									freeSolo
									sx={{ width: '100%', height:'1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', padding: '0'}}									
									options={Constants.explorePlaces.map((option) => option.state)}
									renderInput={(params) => <TextField {...params} label="search" inputProps={{
										...params.inputProps,
										style: { fontSize: '12px', textAlign: 'left',  } // Set the height here
									}} />}
								/>
							</Stack>
							{Constants.explorePlaces.map((item) => (
								<div key={item.state} className='my-2'>
									<h5 className='d-flex justify-content-start lh-1 mb-0'>{item.state}</h5>
									<hr/>
									<div className="row mt-0">
										{item.districts.map((district) => (
											<div className="col-4 d-flex justify-content-start" key={district}>
												<p className='color-green lh-1 m-1'>{district}</p>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExploreNow;
