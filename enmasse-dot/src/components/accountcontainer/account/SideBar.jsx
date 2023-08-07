import React, { useState } from 'react'
import '../../../App.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import HelpIcon from '@mui/icons-material/Help';
import * as Constants from '../../../utils/constants/Constants';

function SideBar({ handleVisiblePanel, visiblePanel }) {
    return (
        <div className='account-sidebar col-3 p-0 pe-3 h-100'>
            <Box sx={{ width: '100%', maxWidth: 360, height: '100%', bgcolor: 'white' }} className="h-100 full-height">
                {Constants.profileData.map((data, index) => (
                    <List component="nav" aria-label="main mailbox folders" className='my-0 p-0'>
                        <ListItemButton
                            selected={index === visiblePanel}
                            onClick={() => handleVisiblePanel(index)}
                            key={index}
                        >
                            <ListItemIcon>
                                {data.icon}
                            </ListItemIcon>
                            <ListItemText primary={data.option} />
                        </ListItemButton>
                        <Divider className='m-0' />
                    </List>
                ))}
            </Box>
            {/* <button className='btn btn-white bottom-0'><HelpIcon className='mx-1 mb-1 color-black' />Help & Support</button> */}
        </div>
    );
}

export default SideBar;
