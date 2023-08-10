import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import * as Constants from '../../../../../utils/constants/Constants';
import EditInvite from './EditInvite';
import InviteNew from './InviteNew';

export default function Invite() {
	const [inviteData, setInviteData] = useState(Constants.inviteData);
	const [selectedData, setSelectedData] = useState(null);
	const [openInviteNew, setOpenInviteNew] = useState(false);

	const handleOpenInviteNew = () => {
		setOpenInviteNew(true);
	};
	const handleCloseInviteNew = () => {
		setOpenInviteNew(false);
	};

	const handleEditClick = (row) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow) => {
		setInviteData((prevData) =>
			prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
		);
		handleCloseDialog();
	};


	// function for Delete
	const handleDeleteClick = (index) => {
		var data = [...inviteData];
		data.splice(index, 1);
		setInviteData(data);
	};

	return (
		<div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
			<div className="row w-100 h-10 d-flex justify-content-between pt-3 pl-4">
				<h5 className='mt-2 col-2'>Invite</h5>
				<button className='btn btn-outline-secondary width-fit-content-button' onClick={handleOpenInviteNew} ><AddIcon className='mx-1 mb-1  text-dark' />Invite New</button>
			</div>
			<hr />
			<div className="row w-100 h-90 d-flex justify-content-center">
				<TableContainer component={Paper} className='invite-table-width'>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left" variant='head' sx={{ fontWeight: '600' }}>Name</TableCell>
								<TableCell align="center" variant='head' sx={{ fontWeight: '600' }}>Role</TableCell>
								<TableCell align="center" variant='head' sx={{ fontWeight: '600' }}>Company</TableCell>
								<TableCell align="center" variant='head' sx={{ fontWeight: '600' }}>Company Type</TableCell>
								<TableCell align="center" variant='head' sx={{ fontWeight: '600' }}>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{inviteData.map((row, index) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">{row.name}<br />{row.email} </TableCell>
									<TableCell component="th" align="center" scope="row" sx={{ fontSize: '16px' }}><div className='color-green'>{row.role}</div></TableCell>
									<TableCell component="th" align="center" scope="row">{row.company}</TableCell>
									<TableCell component="th" align="center" scope="row">{row.companyType}</TableCell>
									<TableCell align="center" className='' >
										<button type='transparent' className='btn-white'>
											<EditIcon className='color-gray' onClick={() => handleEditClick(row)} />
										</button>
										<button type='transparent' className='btn-white'>
											<DeleteSweepIcon className='color-orange fs-5 ms-2' onClick={() => handleDeleteClick(index)} />
										</button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			{selectedData && <EditInvite selectedData={selectedData} handleEditClick={handleEditClick} handleCloseDialog={handleCloseDialog} handleUpdate={handleUpdate} />}

			{openInviteNew && <InviteNew openInviteNew={openInviteNew} setOpenInviteNew={setOpenInviteNew} handleOpenInviteNew={handleOpenInviteNew} handleCloseInviteNew={handleCloseInviteNew} inviteData={inviteData} setInviteData={setInviteData} />}

		</div>



	)
}
