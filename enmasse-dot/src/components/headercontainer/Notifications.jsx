import '../../styles/headercontainer/Notifications.css';
import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { MdDeleteSweep } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import WorkInProgressImage from '../../utils/images/work_in_progress.svg';

function Notifications() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	var notifications = [
		{
			key: 1,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: true,
		},
		{
			key: 2,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: true,
		},
		{
			key: 3,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: true,
		},
		{
			key: 4,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: false,
		},
		{
			key: 5,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: false,
		},
		{
			key: 6,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
			new: false,
		},
	];

	return (
		<div className='Notifications'>
			<button className='close-btn' onClick={() => toggleDrawer(true)}>
				<MdNotifications fontSize={25} className='header-icon' />
			</button>

			<Drawer
				anchor='right'
				// hideBackdrop="true"
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				<Box className='d-flex flex-wrap justify-content-between mx-3 my-4'>
					<Typography variant='h6' className='drawer-header'>
						Notifications
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
						width: 435,
					}}
					role='presentation'
					onClick={() => toggleDrawer(false)}
					onKeyDown={() => toggleDrawer(false)}
				>
					<div className="d-flex justify-content-center p-5">
						<div className="" style={{ width: '18rem' }}>
							<img src={WorkInProgressImage} className="card-img-top" alt="Image" width="100%" />
							<div className="card-body">
								<h5 className="card-title">Work in progress</h5>
								<p className="card-text">Our team is actively developing these features for the upcoming updates. Keep an eye out for more information.</p>
							</div>
						</div>
					</div>
					{/* <List>
						{notifications.map((item) => (
							<ListItem
								key={item.key}
								aria-selected={item.new}
								divider='true'
								disablePadding
							>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar variant='square'> </Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={item.title}
										secondary={item.description}
										primaryTypographyProps={{
											fontWeight: 600,
											fontSize: 15,
										}}
									/>
									<ListItemIcon>
										<MdDeleteSweep fontSize={23} />
									</ListItemIcon>
								</ListItemButton>
								<Divider />
							</ListItem>
						))}
					</List> */}
				</Box>
			</Drawer>
		</div>
	);
}

export default Notifications;
