"use client"
import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFjcXVlZXNlIiwiYSI6ImNscmtlOXNkOTBkNHIybm8yd3kzNmsxbG4ifQ.Qa8wv7Jk4yvCjc6Y_pwyeA';

const MapComponent = (props) => {
	const mapContainerRef = useRef(null);
	let map = null


	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: `mapbox://styles/mapbox/${props.mapStyle}`, // 设置地图样式
			center: [-122.483696, 37.833818], // 设置地图中心点的经纬度
			zoom: 10, // 设置地图缩放级别
		});
		map.addControl(new mapboxgl.NavigationControl());
		map.setStyle('mapbox://styles/mapbox/' + props.mapStyle);
		map.on('load', () => {
			map.addSource('route', {
				'type': 'geojson',
				'data': {
					'type': 'Feature',
					'properties': {
						"ethnicity": "Asian"
					},
					'geometry': {
						'type': 'LineString',
						'coordinates': [
							[-122.483696, 37.833818],
							[-122.483482, 37.833174],
							[-122.483396, 37.8327],
							[-122.483568, 37.832056],
							[-122.48404, 37.831141],
							[-122.48404, 37.830497],
							[-122.483482, 37.82992],
							[-122.483568, 37.829548],
							[-122.48507, 37.829446],
							[-122.4861, 37.828802],
							[-122.486958, 37.82931],
							[-122.487001, 37.830802],
							[-122.487516, 37.831683],
							[-122.488031, 37.832158],
							[-122.488889, 37.832971],
							[-122.489876, 37.832632],
							[-122.490434, 37.832937],
							[-122.49125, 37.832429],
							[-122.491636, 37.832564],
							[-122.492237, 37.833378],
							[-122.493782, 37.833683]
						]
					}
				}
			});
			map.addLayer({
				'id': 'route',
				'type': 'line',
				'source': 'route',
				'layout': {
					'line-join': 'round',
					'line-cap': 'round'
				},
				'paint': {
					'line-color': '#4963F2',
					'line-width': 8
				}
			});
		});
		return () => {
			map.remove();
		};
	}, [props.mapStyle]);

	return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} ></div>
};

export default MapComponent;