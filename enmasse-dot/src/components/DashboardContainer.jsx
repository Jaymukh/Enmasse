import Header from "./headercontainer/Header";
import DashBoard from "./dashboardcontainer/DashBoard";

const DashBoardContainer = ({ handleVisiblePanel }) => {
    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} />
            <DashBoard />
        </div>
    )
}

export default DashBoardContainer;