import Header from "./headercontainer/Header";
import DashBoard from "./dashboardcontainer/DashBoard";

const DashBoardContainer = ({ handleVisiblePanel, handleOverlay, handleInfographic }) => {
    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} handleInfographic={handleInfographic} />
            <DashBoard />
        </div>
    )
}

export default DashBoardContainer;