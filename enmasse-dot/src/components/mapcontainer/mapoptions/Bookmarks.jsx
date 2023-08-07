import '../../../styles/mapcontainer/mapoptions/Bookmarks.css';
import React, { useState } from 'react';
import { MdBookmarks } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { HiPencil } from 'react-icons/hi';
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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function Bookmarks() {

	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => {
		setOpen(open);
	};

	var bookmarks = [
		{
			key: 1,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			new: true,
		},
		{
			key: 2,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			new: true,
		},
		{
			key: 3,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			new: true,
		},
		{
			key: 4,
			title: 'Notification Title',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			new: false,
		},
	];

	return (
		<>
			<button
				className='subheader-btn px-1'
				onClick={() => toggleDrawer(true)}
			>
				<div className='d-flex flex-wrap'>
					<MdBookmarks className='mt-1' />
					<p className='mx-2 my-0'>Bookmarks</p>
				</div>
			</button>
			<Drawer
				anchor='right'
				// hideBackdrop="true"
				open={open}
				onClose={() => toggleDrawer(false)}
			>
				<div className='bookmark-div'>
					<Box className='d-flex flex-wrap justify-content-between mx-3 my-4'>
						<Typography variant='h6' className='drawer-header'>
							Bookmarks
						</Typography>
						<button
							className='close-btn'
							onClick={() => toggleDrawer(false)}
						>
							<MdClose fontSize={27} />
						</button>
					</Box>
						<TextField
							className='bookmark-search-bar mx-3'
							search
							placeholder='Search...'
							size='small'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
						></TextField>
					<Box
						sx={{
							width: 440,
						}}
						role='presentation'
						onClick={() => toggleDrawer(false)}
						onKeyDown={() => toggleDrawer(false)}
					>
						<List>
							{bookmarks.map((item) => (
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
											<HiPencil fontSize={23} />
										</ListItemIcon>
									</ListItemButton>
									<Divider />
								</ListItem>
							))}
						</List>
					</Box>
				</div>
			</Drawer>
		</>
	);
}

export default Bookmarks;
