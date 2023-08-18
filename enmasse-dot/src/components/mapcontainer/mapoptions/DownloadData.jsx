import '../../../styles/mapcontainer/mapoptions/Bookmarks.css';
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import WorkInProgressImage from '../../../utils/images/work_in_progress.svg';

function DownloadData() {

	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	return (
		<>
			<button
				className='subheader-btn px-1 me-2'
				onClick={() => toggleDrawer(true)}
			>
				<div className='d-flex flex-wrap'>
					<FiDownload className='mt-1' />
					<p className='mx-2 my-0'>Download data</p>
				</div>
			</button>
			<Drawer
				anchor='right'
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				<div className='bookmark-div'>
					<Box className='d-flex flex-wrap justify-content-between mx-3 my-4'>
						<Typography variant='h6' className='drawer-header'>
							Download data
						</Typography>
						<button
							className='close-btn'
							onClick={() => toggleDrawer(false)}
						>
							<MdClose fontSize={27} />
						</button>
					</Box>
					<Box
						sx={{
							width: 440,
						}}
						role='presentation'
						onClick={() => toggleDrawer(false)}
						onKeyDown={() => toggleDrawer(false)}
					>
						<div className="d-flex justify-content-center p-5 mt-6">
							<div className="mt-6" style={{ width: '18rem' }}>
								<img src={WorkInProgressImage} className="card-img-top" alt="Image" width="100%" />
								<div className="card-body">
									<h5 className="card-title">Work in progress</h5>
									<p className="card-text">Our team is actively developing these features for the upcoming updates. Keep an eye out for more information.</p>
								</div>
							</div>
						</div>
					</Box>
				</div>
			</Drawer>
		</>
	);
}

export default DownloadData;
