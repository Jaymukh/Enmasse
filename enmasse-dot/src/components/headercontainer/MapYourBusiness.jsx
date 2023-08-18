import '../../styles/headercontainer/MapYourBusiness.css';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import WorkInProgressImage from '../../utils/images/work_in_progress.svg';

function MapYourBusiness() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	return (
		<div >
			<button
				className='btn btn-white mx-2'
				onClick={() => toggleDrawer(true)}
			>
				<FaMapMarkerAlt className='me-2' fontSize={20} />
				Map Your Business
			</button>
			<Drawer
				className='drawer'
				anchor='right'
				// hideBackdrop="true"
				// sx={{
				// 	width: 200,
				// }}
				style={{width: '25vw'}}
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				<Box
					className='d-flex flex-wrap justify-content-between mx-4 my-4'
					role='presentation'
				>
					<Typography variant='h6' className='drawer-header mx-4'>
						Map Your Business
					</Typography>
					<button
						className='close-btn'
						onClick={() => toggleDrawer(false)}
					>
						<MdClose fontSize={27} />
					</button>
				</Box>
				<div className='mx-5 my-1'>
					<h6 className='contact-para'>
						Why do we need this?
					</h6>
					<p className='text-wrap'>To plot your business and recommend the best opportunities for you.</p>
					<div className="d-flex justify-content-center p-5">
						<div className="" style={{ width: '18rem' }}>
							<img src={WorkInProgressImage} className="card-img-top" alt="Image" width="100%" />
							<div className="card-body">
								<h5 className="card-title">Work in progress</h5>
								<p className="card-text">Our team is actively developing these features for the upcoming updates. Keep an eye out for more information.</p>
							</div>
						</div>
					</div>
				</div>

			</Drawer>
		</div>
	);
}

export default MapYourBusiness;
