import { Source, Layer } from 'react-map-gl';

const MapCircleLayer = ({ selected, type, features, properties }) => {

    var opacity = selected && type === 'radius-all' ? 0 : 0.5;

    return (
        <>
            <Source id={properties.sourceId} type="geojson" data={features} />
				<Layer
					id={properties.layerId}
					type='circle'
					source={properties.sourceId}
					paint={{
						'circle-radius': ['get', type],
						'circle-color': properties.circleColor,
						'circle-opacity': opacity,
						'circle-stroke-width': properties.circleStrokeWidth,
						'circle-stroke-color': properties.circleStrokeColor
					}}
				/>
        </>
    )

}

export default MapCircleLayer;