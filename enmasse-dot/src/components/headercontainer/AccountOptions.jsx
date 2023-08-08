import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MdFormatListBulleted } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import * as Constants from '../../utils/constants/Constants';

function AccountOptions({ handleMapDisplay, handleVisiblePanel }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClickMenuItem = (event, index) => {
		handleVisiblePanel(index);
		handleMapDisplay(false);
		handleClose();
	}

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<div>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					// endIcon={<KeyboardArrowDownIcon />}
					>
						<Avatar sx={{ width: 30, height: 30, fontSize: 16 }}>M</Avatar>
						<MdArrowDropDown className='mx-1' fontSize={25}/>
					</IconButton>
				</Tooltip>
			</div>
			<div>
				<Menu					
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				>
					{Constants.accountMenuItems.map((item, index) => (
						<MenuItem onClick={(event) => handleClickMenuItem(event, item.key)} className="menu-font-size" >
							<ListItemIcon>
								  {item.icon}
							</ListItemIcon>
							{item.text}
						</MenuItem>
					))}					
					<Divider />
					<MenuItem onClick={handleClose} className="menu-font-size" >
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
}

export default AccountOptions;
