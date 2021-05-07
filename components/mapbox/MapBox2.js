import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';

const mapStyle = {
	width: '100%',
	height: 500
};

const params = {
	country: 'km'
};

const mapboxApiKey = 'pk.eyJ1Ijoia2F5bWthc3NhaSIsImEiOiJja29jdDcyczIwMGF1MzNvMXAxZ3ZrZG9qIn0.UEi0X2bcUgi0EjXr2qI8uQ';

const MapBox2 = () => {
	const [ viewport, setViewport ] = useState({
		latitude: -11.9338,
		longitude: 43.8815,
		zoom: 7.67
	});

	const onSelected = (viewport, item) => {
		setViewport(viewport);
	};

	return (
		<div>
			<ReactMapGL
				mapboxApiAccessToken={mapboxApiKey}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				{...viewport}
				{...mapStyle}
				onViewportChange={(viewport) => setViewport(viewport)}
			>
				<Geocoder
					mapboxApiAccessToken={mapboxApiKey}
					onSelected={onSelected}
					viewport={viewport}
					hideOnSelect={true}
					value=""
					queryParams={params}
				/>
			</ReactMapGL>
		</div>
	);
};

export default MapBox2;
