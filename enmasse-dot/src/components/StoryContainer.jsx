import Header from "./headercontainer/Header";
import FamilyContainer from "./familyContainer/FamilyContainer";

const StoryContainer = ({ handleVisiblePanel }) => {
    return (
        <div className='w-100 primary-bg'>
            <Header handleVisiblePanel={handleVisiblePanel} />
            <FamilyContainer />
        </div>
    )
}

export default StoryContainer;