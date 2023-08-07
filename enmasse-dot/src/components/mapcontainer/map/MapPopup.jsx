
const MapPopup = ({ name, population }) => {
    return (
        <div className="map-popup map-popup-grey-text rounded">
            <h6>{name}</h6>
            <p>Population - {population}</p>
        </div>
    )
}

export default MapPopup;