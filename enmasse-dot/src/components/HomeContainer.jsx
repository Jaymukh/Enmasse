import { useEffect } from 'react';
import Header from './headercontainer/Header';
import MapContainer from './mapcontainer/MapContainer';
import OverlayContainer from '../components/overlaycontainer/OverlayContainer';
import { useRecoilState } from "recoil";
import { loggedUserState } from "../states";
import { useUserService } from '../services';
import { toast } from "react-toastify";

const HomeContainer = ({ handleVisiblePanel, handleOverlay, handleInfographic, overlay, showInfographic }) => {
    const [loggedUser, setLoggedUser] = useRecoilState(loggedUserState);
    const userService = useUserService();

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        userService.getUserDetails().then((response) => {
            if (response) {
                setLoggedUser(response);
            }
        })
            .catch(error => toast.error(error));;
    };

    return (
        <>
            <div className='w-100 primary-bg'>
                <Header handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} handleInfographic={handleInfographic} />
                <MapContainer />
            </div>
            {overlay ? (
                <div className='overlay d-flex flex-wrap justify-content-center align-items-center'>
                    <OverlayContainer handleOverlay={handleOverlay} handleInfographic={handleInfographic} showInfographic={showInfographic} />
                </div>
            ) : (
                ''
            )}
        </>
    )
}

export default HomeContainer;