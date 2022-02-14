import mapboxgl from "mapbox-gl";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createLogs } from "../../data/logs";
import "./Form.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlzaGFscmFuYW1hZ2FyIiwiYSI6ImNrd3Q3NXc1OTBrcjQyb21oNHNrOWNrYW8ifQ.rCLxzQPHDiylqH8_VzvafA';

export default function PlanForm () {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [lat, setLat] = useState(27.7172);
    const [lng, setLng] = useState(85.3240);
    const [date, setDate] = useState(Date.now());
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (map.current) return;
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 9
            });
            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
            });
            // map.current.addControl(MapboxGeocoder({
            //     accessToken: mapboxgl.accessToken,
            //     mapboxgl: mapboxgl,
            //     marker: true
            // }));
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('title', title);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('visitDate', date);

        const res = await createLogs(formData);
        if (res === "logs created successfully"){
            alert("logs created successfully");
            navigate("/logs");
        }
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form className="form-group">
                <h2 className="my-3">Create Trip Plans</h2>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title" 
                        placeholder="First visit to Nepal"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" rows="3" 
                        placeholder="First ....."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label for="date" className="form-label">Visited Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        placeholder={Date.now()}
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="form-map" className="form-label">Location</label>
                    <div ref={mapContainer} id="form-map" className="form-map-container"></div>
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input 
                        className="form-control mb-3"
                        type="file"  
                        onChange={e => setImage(e.target.files[0])}
                    />
                    {/* <div className="img-preview bg-light">
                        <img 
                            className="preview-image"
                            src={image} 
                        />
                    </div> */}
                </div>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form> 
        </div>
    )
}