import '../../styles/headercontainer/RequestDetails.css';
import React, { useState } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';

function RequestDetails() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	return (
		<div>
			<button
				className='btn btn-white mx-2'
				onClick={() => toggleDrawer(true)}
			>
				<BiSolidPhoneCall className='me-2' fontSize={20}/>
				Request details
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
				<Box
					className='d-flex flex-wrap justify-content-between mx-4 my-4'
					role='presentation'
				>
					<Typography variant='h6' className='drawer-header mx-4'>
						Request details
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
						We are easy to reach. Make a call
					</h6>
					<div className='d-flex flex-wrap mx-3'>
						<BiSolidPhoneCall fontSize={20} />
						<p className='mx-3 contact-num'>12345 67890</p>
					</div>
				</div>
				<div className='mx-5 my-1'>
					<h6 className='contact-para'>
						You can also reach out to us by filling the form below
					</h6>
					<Box fullWidth='true' className='my-4'>
						<FormControl>
								<FormLabel
									required='true'
									className='text-dark'
								>
									Name
								</FormLabel>
								<TextField
									placeholder='Name'
									size='small'
									fullWidth
									className='mb-3 contact-input'
								/>
								<FormLabel
									required='true'
									className='text-dark'
								>
									Email
								</FormLabel>
								<TextField
									placeholder='Email'
									size='small'
									fullWidth
									className='mb-3'
								/>
								<FormLabel
									required='true'
									className='text-dark'
								>
									Message
								</FormLabel>
								<TextField
									placeholder='Message'
									multiline
									rows={3}
									fullWidth
									className='mb-3'
								/>
								<button className='submit-btn'>Submit</button>
						</FormControl>
					</Box>
				</div>
			</Drawer>
		</div>
	);
}

export default RequestDetails;
