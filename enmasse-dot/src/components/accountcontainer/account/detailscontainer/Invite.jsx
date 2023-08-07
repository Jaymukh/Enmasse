import React from 'react'
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
import * as Constants from '../../../../utils/constants/Constants';

export default function Invite() {

	return (
		<div className='container bg-white w-90 h-100 mt-4 detail-container me-5'>
			<div className="row w-100 h-10 d-flex justify-content-between pt-3 pl-4">
				<h5 className='mt-2 col-2'>Invite</h5>
				<button className='btn btn-outline-secondary width-fit-content-button'><AddIcon className='mx-1 mb-1  text-dark' />Invite New</button>
			</div>
			<hr />
			<div className="row w-100 h-90 d-flex justify-content-center">
				<TableContainer component={Paper} >
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left" >Name</TableCell>
								<TableCell align="center">Status</TableCell>
								<TableCell align="center">Role</TableCell>
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Constants.inviteData.map((data) => (
								<TableRow
									key={data.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">{data.name}<br />{data.email} </TableCell>
									<TableCell align="center" >
										<div className={(data.status == 'Pending') ? 'bg-brown text-light hw-fit-content pt-1' : 'bg-green text-light hw-fit-content pt-1'} >{data.status}</div>
									</TableCell>
									<TableCell align="center" className='' >
										<select className='border-0 h6 text-success'>
											<option value="volvo">{data.role}</option>
										</select>
									</TableCell>
									<TableCell align="center"><EditIcon className='text-secondary' />
										<DeleteSweepIcon className='text-danger color-brown' />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>



	)
}

