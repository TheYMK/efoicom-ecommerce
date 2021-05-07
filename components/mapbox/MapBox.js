import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5bWthc3NhaSIsImEiOiJja29jdDcyczIwMGF1MzNvMXAxZ3ZrZG9qIn0.UEi0X2bcUgi0EjXr2qI8uQ';
const MapBox = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [ lng, setLng ] = useState(43.8815);
	const [ lat, setLat ] = useState(-11.9338);
	const [ zoom, setZoom ] = useState(7.67);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ lng, lat ],
			zoom: zoom
		});
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div>
			<div className="map-sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
};

export default MapBox;
