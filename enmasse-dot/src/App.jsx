import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';


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
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
