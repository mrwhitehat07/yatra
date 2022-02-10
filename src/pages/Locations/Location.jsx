import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getLocationsBySlug } from "../../data/locations";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Location.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlzaGFscmFuYW1hZ2FyIiwiYSI6ImNrd3Q3NXc1OTBrcjQyb21oNHNrOWNrYW8ifQ.rCLxzQPHDiylqH8_VzvafA';

const Location = () => {
    const [location, setLocation] = useState({
        country: '',
        city: '',
        image: '',
        lat: 27.7172,
        lng: 85.3240,
        description: '',
    });
    const mapContainer = useRef(null);
    const map = useRef(null);
    const { slug } = useParams();

    useEffect(() => {
        async function getLocation() {
            const locs = await getLocationsBySlug(slug);
            setLocation(locs);
        }
        getLocation();
        if (map.current) return;
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [location.lng, location.lat],
                zoom: 9
            });
        new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(map.current);

    }, []);

    return (
        <div className="container pt-2">
            <div className="mycontainer">
                <div className="content-container">
                    <img className="img-container" src={location.image} alt={location.city} />
                    <div className="d-flex flex-row mt-2">
                        <h2>{location.city},</h2>
                        <h2> {location.country}</h2>
                    </div>
                    <div className="info-container bg-light mt-2">
                        <div className="info mr-5">
                            <h3>14</h3>
                            <p>Visited</p>
                        </div>
                        <div className="info mr-5">     
                            <h3>114</h3>
                            <p>Planning</p>
                        </div>
                        <div className="info">        
                            <h3>10</h3>
                            <p>Rated</p>
                        </div>
                    </div>
                    <div className="description-container mt-2">
                        <p className="lh-base" id="description">{location.description}</p>
                    </div>
                </div>
                <div ref={mapContainer} className="map-container"></div>
            </div>
        </div>
    )
}

export default Location;