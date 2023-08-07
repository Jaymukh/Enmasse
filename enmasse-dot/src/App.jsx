import { useState } from 'react';
import './App.css';
import Header from './components/headercontainer/Header';
import MapContainer from './components/mapcontainer/MapContainer';
import AccountContainer from './components/accountcontainer/AccountContainer'
import OverlayContainer from './components/OverlayContainer';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Router from './Router';

const customTheme = (outerTheme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'--TextField-brandBorderColor': '#E0E3E7',
						'--TextField-brandBorderHoverColor': '#B2BAC2',
						'--TextField-brandBorderFocusedColor': '#111827',
						'& label.Mui-focused': {
							color: 'var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						borderColor: 'var(--TextField-brandBorderColor)',
					},
					root: {
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							borderColor:
								'var(--TextField-brandBorderHoverColor)',
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
							{
								borderColor:
									'var(--TextField-brandBorderFocusedColor)',
							},
					},
				},
			},
			MuiFilledInput: {
				styleOverrides: {
					root: {
						'&:before, &:after': {
							borderBottom:
								'2px solid var(--TextField-brandBorderColor)',
						},
						'&:hover:not(.Mui-disabled, .Mui-error):before': {
							borderBottom:
								'2px solid var(--TextField-brandBorderHoverColor)',
						},
						'&.Mui-focused:after': {
							borderBottom:
								'2px solid var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
			MuiInput: {
				styleOverrides: {
					root: {
						'&:before': {
							borderBottom:
								'2px solid var(--TextField-brandBorderColor)',
						},
						'&:hover:not(.Mui-disabled, .Mui-error):before': {
							borderBottom:
								'2px solid var(--TextField-brandBorderHoverColor)',
						},
						'&.Mui-focused:after': {
							borderBottom:
								'2px solid var(--TextField-brandBorderFocusedColor)',
						},
					},
				},
			},
		},
	});

function App() {
	const outerTheme = useTheme();

	const [overlay, setOverlay] = useState(true);
	const [mapDisplay, setMapDisplay] = useState(true);

	const handleOverlay = (overlay) => {
		setOverlay(overlay);
	};

	const handleMapDisplay = (flag) => {
		setMapDisplay(flag);
	}

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
