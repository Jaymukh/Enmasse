import React, { useEffect, useState } from 'react';
import '../../App.css';
import * as Constants from '../../utils/constants/Constants';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../../utils/constants/routeConstants';
import { useUserService } from '../../services';
import { useRecoilValue } from 'recoil';
import { loggedUserState } from '../../states';

function AccountOptions({ handleVisiblePanel }) {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const userService = useUserService();
	const loggedUser = useRecoilValue(loggedUserState);

	useEffect(() => {
		userService.getUserDetails();
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClickMenuItem = (index) => {
		handleVisiblePanel(index);
		handleClose();
		navigate(RouteConstants.profile);
	}

	const handleLogout = () => {
		userService.logout();
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
						onClick={() => handleClick()}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar sx={{ width: 30, height: 30, fontSize: 16 }}>{loggedUser.initial}</Avatar>
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
					className='my-0 py-0'
				>
					<MenuItem onClick={() => handleClickMenuItem( 0)} className="menu-font-size" >
						<ListItemIcon>
							<Avatar
								sx={{ width: 28, height: 28, fontSize: 15 }}
							>
								{loggedUser.initial}
							</Avatar>
						</ListItemIcon>
						{loggedUser.name}
					</MenuItem>
					{Constants.accountMenuItems.map((item, index) => (
						<MenuItem onClick={() => handleClickMenuItem(item.key)} className="menu-font-size" >
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							{item.text}
						</MenuItem>
					))}
					<Divider className='my-0' />
					<MenuItem onClick={handleLogout} className="menu-font-size mb-0" >
						<ListItemIcon>
							<MdLogout fontSize={22} />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
}

export default AccountOptions;
