import { useState } from 'react';
import './App.css';
import Header from './components/headercontainer/Header';
import MapContainer from './components/mapcontainer/MapContainer';
import AccountContainer from './components/accountcontainer/AccountContainer'
import OverlayContainer from './components/OverlayContainer';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Router from './Router';


function App() {

	return (
		<div className='App'>
			{/* <ThemeProvider theme={customTheme(outerTheme)}>
				<div className='bottom-div'>
					<Header handleMapDisplay={handleMapDisplay} />
					{ mapDisplay ? <MapContainer /> : <AccountContainer handleMapDisplay={handleMapDisplay}/>}
				</div>
				{overlay ? (
					<div className='overlay d-flex flex-wrap justify-content-center align-items-center'>
						<OverlayContainer handleOverlay={handleOverlay} />
					</div>
				) : (
					''
				)}
			</ThemeProvider> */}
			<Router />
		</div>
	);
}

export default App;
