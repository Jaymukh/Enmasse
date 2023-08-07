import { FiArrowRight } from 'react-icons/fi';

const MapPopup = ({ name, population }) => {
    return (
        // <div className="map-popup map-popup-grey-text rounded">
        //     <h6>{name}</h6>
        //     <p>Population - {population}</p>
        // </div>
        <div className="map-popup map-popup-grey-text rounded row h-100">
            <div className="col-4 px-0">
                {/* <img width={100} height={100} src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="/> */}
                <img className="map-popup-story-img rounded ms-2" src="https://s3.ap-south-1.amazonaws.com/kronos-new-tarento/1/userprofile/1841/1657528681838_Ameya%20Shetty.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230807T085110Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAS2D3QDFYXIAJ2TAB%2F20230807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=fe32f142787a47fdf38bb6b994d0ac3882c862ffb42bcf2c6fa3e3d95f39d059"/>
        </div>
            <div className="col-8 ps-1 d-flex flex-column justify-content-start">
                <p className="map-popup-description text-start my-0">3 Family members</p>
                <p className="map-popup-description text-start my-0"><span className="text-success">$6000</span> Annual Spend on Core Solutions</p>
                <button className="map-popup-description border-0 bg-transparent text-success text-start p-0">Read more<FiArrowRight className='ms-1'/></button>
            </div>            
        </div>
    )
}

export default MapPopup;