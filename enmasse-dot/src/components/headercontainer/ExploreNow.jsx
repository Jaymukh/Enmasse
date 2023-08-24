import '../../styles/headercontainer/ExploreNow.css';
import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import * as Constants from '../../utils/constants/Constants';

function ExploreNow() {
	const [selectedValue, setSelectedValue] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [selectedshowDiv, setSelectedshowDiv] = useState(true);
	const [selectedDistricts, setSelectedDistricts] = useState([]);
	const [selectedDistrictOptions, setSelectedDistrictOptions] = useState([]);
	const [selectedPlaceType, setSelectedPlaceType] = useState('state');

	const handleStateChange = (event, newValue, clear) => {
		//setSelectedValue(newValue);
		if (!newValue && !selectedValue) {
			setSelectedDistricts(Constants.explorePlaces); // Keep the entire array
			setSelectedDistrictOptions(Constants.explorePlaces);
			setSelectedPlaceType('state');
			setInputValue(clear);
		}
		else {
			if (!newValue) {
				const index = Constants.explorePlaces.findIndex(option => option.state === selectedValue);
				setSelectedDistricts(Constants.explorePlaces[index].districts);
			}
			else {
				const val = Constants.explorePlaces.some(option => option.state === newValue) ? "districts" : "state";
				if (val === "districts") {
					setSelectedValue(newValue);
					setInputValue(clear); // Clear the input value when option is selected   
					const index = Constants.explorePlaces.findIndex(option => option.state === newValue);
					setSelectedDistricts(Constants.explorePlaces[index].districts);
					setSelectedDistrictOptions(Constants.explorePlaces[index].districts);
					setSelectedPlaceType(val);
					setSelectedshowDiv(false);
				}
				else {
					const districtFound = Constants.explorePlaces.some(option => option.districts.includes(newValue));
					if (districtFound) {
						setSelectedDistricts([newValue]);
						setSelectedPlaceType("districts");
						setSelectedshowDiv(false);
					}
					else {
						setSelectedDistricts(Constants.explorePlaces); // Keep the entire array
						setSelectedDistrictOptions(Constants.explorePlaces);
						setSelectedPlaceType('state');
						setInputValue(clear);
					}
				}
			}
		};
	}
	const onhandleInputChange = (event, newInputValue) => {
		setInputValue('');
	};
	const clearInput = () => {
		debugger;
		setSelectedValue('');
		setInputValue();
		setSelectedshowDiv(true);
		setSelectedDistricts(Constants.explorePlaces); // Keep the entire array
		setSelectedPlaceType("state");
	};

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
							<h4 className="modal-title my-3 mx-4" id="staticBackdropLabel">Explore Now</h4>
							<button type="button" className="btn-close my-3 mx-3" data-bs-dismiss="modal" aria-label="Close">
							</button>
						</div>
						<div className="modal-body d-flex flex-column justify-content-start mx-2">
							<p className='Dialog-p'>Explore the available list of regions in our platform. Our team is working on getting more regions unlocked for you !</p>
							<div className='d-flex flex-row justify-content-start'>
								<h5 className='my-2'>{selectedValue}</h5>
								{selectedValue && ( // Show clear button only when inputValue is not empty
									<button type="button" className="btn-close my-3 mx-3 close-btn" onClick={clearInput} />
								)}
							</div>
							<Stack spacing={2} sx={{ width: 300 }} className='my-4'>
								<Autocomplete
									id="free-solo-demo"
									onInputChange={onhandleInputChange}
									value={inputValue}
									freeSolo
									// options={Constants.explorePlaces.map((option) => option.state)}
									options={selectedPlaceType === "districts"
										? selectedDistrictOptions
										: Constants.explorePlaces.map((option) => option.state)}
									onChange={handleStateChange}
									renderInput={(params) => (
										<TextField
											{...params}
											label="search"
											inputProps={{
												...params.inputProps,
												style: {
													height: '1rem',
													textAlign: 'left',
													display: 'flex',
													alignItems: 'center',
												},
											}}
										/>
									)}
								/>
							</Stack>
							<div>
								{selectedshowDiv ? (
									// Show this div when selectedValue is true
									<div>
										{Constants.explorePlaces.map((item) => (
											<div key={item.state}>
												<h5 className='d-flex justify-content-start'>{item.state}</h5>
												<hr></hr>
												<div className="row">
													{item.districts.map((district) => (
														<div className="col-4 d-flex justify-content-start" key={district}>
															<p className='color-green'>{district}</p>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								) : (
									// Show this div when selectedValue is false
									<div className="div2">
										<h5 className='d-flex justify-content-start'>{selectedValue}</h5>
										<hr></hr>
										<div className="row">
											{selectedDistricts.map((district) => (
												<div className="col-4 d-flex justify-content-start" key={district}>
													<p className='color-green'>{district}</p>
												</div>
											))}
										</div>
									</div>
								)}

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExploreNow;
