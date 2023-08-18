import '../../styles/headercontainer/ExploreNow.css';
import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import Drawer from '@mui/material/Drawer';

function ExploreNow() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	return (
		<div>
			<button
				className='btn btn-black me-2'
				onClick={() => toggleDrawer(true)}
			>
				<MdOutlineTravelExplore className='me-2' fontSize={20}/>
				Explore Now
			</button>
			<Drawer
				className='drawer'
				anchor='right'
				// hideBackdrop="true"
				sx={{
					width: 300,
				}}
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				<div
					className='d-flex flex-wrap justify-content-between mx-4 my-4'
					role='presentation'
				>
					<h6 className='drawer-header mx-4'>Explore Now</h6>
					<button
						className='close-btn'
						onClick={() => toggleDrawer(false)}
					>
						<MdClose fontSize={27} />
					</button>
				</div>
				<div className='mx-5 my-1 description-div'>
					<h6 className='mb-2'>Why do we need this?</h6>
					<p className='description-para'>
						To plot your business and recommend the best
						opportunities for you.
					</p>
				</div>
				<div className='mx-5 my-1 description-div'>
					<div className='d-flex flex-wrap mb-2'>
						<FiDownload />
						<h6 className='mx-2'>Download the sample CSV</h6>
					</div>
					<p className='description-para'>
						Download the sample CSV document and re upload it with
						your datas to view your informations in the map. We
						value the trust you place in us.
					</p>
				</div>
				<div className='mx-5 my-1 description-div note-div'>
					<h6 className='mb-2 mx-3 mt-2'>Note</h6>
					<p className='description-para mx-3'>
						We assure that any PII data uploaded will not be saved.
					</p>
				</div>
				<div className='d-flex mx-5 my-1 description-div download-div align-items-center justify-content-center'>
					<button className='upload-btn'>Upload CSV</button>
				</div>
			</Drawer>
		</div>
	);
}

export default ExploreNow;
