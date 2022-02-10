import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getLocationsBySlug } from "../../data/locations";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlzaGFscmFuYW1hZ2FyIiwiYSI6ImNrd3Q3NXc1OTBrcjQyb21oNHNrOWNrYW8ifQ.rCLxzQPHDiylqH8_VzvafA';

const Location = () => {
    const [location, setLocation] = useState({
        country: '',
        city: '',
        image: '',
        lat: 27.7172,
        lng: 85.3240,
    });
    const [zoom, setZoom] = useState(9);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const { slug } = useParams();

    useEffect(() => {
        async function getLocation() {
            const locs = await getLocationsBySlug(slug);
            setLocation(locs);
        }
        getLocation();
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [location.lng, location.lat],
            zoom: zoom
        });
    }, []);

    return (
        <div className="container pt-2">
            <div ref={mapContainer} className="map-container"></div>
            <div>This is location {location.city} </div>
        </div>
    )
}

export default Location;