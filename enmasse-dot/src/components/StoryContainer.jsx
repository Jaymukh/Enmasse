import Header from "./headercontainer/Header";
import FamilyContainer from "./familyContainer/FamilyContainer";

const StoryContainer = ({ handleVisiblePanel, handleOverlay, handleInfographic }) => {
    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} handleInfographic={handleInfographic} />
            <FamilyContainer />
        </div>
    )
}

export default StoryContainer;