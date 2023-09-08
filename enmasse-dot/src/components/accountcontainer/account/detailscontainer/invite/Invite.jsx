import React, { useState, useEffect } from 'react';
import '../../../../../App.css';
import * as Constants from '../../../../../utils/constants/Constants'
import EditInvite from './EditInvite';
import InviteNew from './InviteNew';
import ConfirmDelete from './ConfirmDelete';
import AddIcon from '@mui/icons-material/Add';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { usersState, loggedUserState } from "../../../../../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { useUserService } from '../../../../../services';



export default function Invite() {
	const [inviteData, setInviteData] = useState(Constants.inviteData);
	const [selectedData, setSelectedData] = useState(null);
	const [openInviteNew, setOpenInviteNew] = useState(false);
	const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false); // Confirm Delete Model
	const [selectedIndex, setSelectedIndex] = useState(null);
	// all user's data
	const [users, setUsers] = useRecoilState(usersState);
	const userService = useUserService();
	const loggedUser = useRecoilValue(loggedUserState);

	//function to get all the users
	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = () => {
		userService.getAll().then((response) => {
			if (response) {
				setUsers(response);
				console.log('users' + response);
			}
		});
	};

	const handleEditClick = (row) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow) => {
		userService.editInvite(updatedRow).then((response) => {
			if (response) {
				console.log('response' + response);
				setUsers((prevData) =>
					prevData.map((row) => (
						row.user_id === updatedRow.user_id ? updatedRow : row
					))
				);
				// getUsers();
				handleCloseDialog();
			}
		})
			.catch(error => console.log('error while updating the data' + error));

	};


	// invite new drawer
	const handleOpenInviteNew = () => {
		setOpenInviteNew(true);
	};
	const handleCloseInviteNew = () => {
		setOpenInviteNew(false);
	};

	// Confirm Delete Model
	const handleConfirmDeleteModal = (showConfirmDeleteModal, index) => {
		setShowConfirmDeleteModal(showConfirmDeleteModal);
		setSelectedIndex(index);
		// handleDeleteClick(index);
	};
	// function for Delete
	const handleDeleteClick = () => {
		console.log(users);
		var data = [...users];
		data.splice(selectedIndex, 1);
		setUsers(data);
		handleConfirmDeleteModal(false);
	};

	return (
		<div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
			<div className="row w-100 h-10 d-flex flex-row justify-content-between pt-3 pl-4">
				<h5 className='mt-2 col-2'>Invite</h5>
				<button className='btn btn-outline-secondary width-fit-content-button' onClick={handleOpenInviteNew} ><AddIcon className='mx-1 mb-1 text-dark' />Invite New</button>
			</div>
			<hr />
			<div className="row w-100 d-flex justify-content-center m-auto invite-table-drawer">
				<TableContainer component={Paper} className='invite-table-width '>
					<Table sx={{ minWidth: 650, marginBottom: '5rem' }} aria-label="simple table">
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
							{users.map((row, index) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">{row.name}<br />{row.email_id} </TableCell>
									<TableCell component="th" align="center" scope="row" sx={{ fontSize: '16px' }}><div className='color-green'>{row.role}</div></TableCell>
									<TableCell component="th" align="center" scope="row">{row.company}</TableCell>
									<TableCell component="th" align="center" scope="row">{row.company_type}</TableCell>
									<TableCell align="center" className='' >
										<button type='transparent' className='btn-white'>
											<EditIcon className='color-gray' onClick={() => handleEditClick(row, index)} />
										</button>
										<button type='transparent' className='btn-white'>
											<DeleteSweepIcon className='color-orange fs-5 ms-2' onClick={() => handleConfirmDeleteModal(true, index)} />
										</button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			{selectedData &&
				<EditInvite selectedData={selectedData} handleCloseDialog={handleCloseDialog} handleUpdate={handleUpdate} />}

			{openInviteNew &&
				<InviteNew openInviteNew={openInviteNew} setOpenInviteNew={setOpenInviteNew} handleOpenInviteNew={handleOpenInviteNew} handleCloseInviteNew={handleCloseInviteNew} users={users} setUsers={setUsers} getUsers={getUsers} />}

			{showConfirmDeleteModal &&
				<ConfirmDelete showConfirmDeleteModal={showConfirmDeleteModal}
					handleConfirmDeleteModal={handleConfirmDeleteModal} selectedIndex={selectedIndex} handleDeleteClick={handleDeleteClick} />}
		</div>



	)
}

