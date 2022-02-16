import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createLogs } from "../../data/logs";
import { getAllLocations } from "../../data/locations";
import "./Form.css";

export default function TripForm () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        city: '',
        country: '',
        image: ''
    }]);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(Date.now());
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getDatas(){
            const locs = await getAllLocations();
            setLocations(locs);
        }
        getDatas();
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
                <h1 className="my-3">Add Your Logs</h1>
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
                    <select 
                        className="form-select"
                        onChange={e => setLocation(e.target.value)}
                    >
                        <option selected>---Select Location---</option>
                        {
                            locations.map((location) => (
                                <option 
                                    key={location.slug}
                                    value={location.slug}
                                >
                                    {location.city}, {location.country}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input 
                        className="form-control mb-3"
                        type="file"  
                        onChange={e => setImage(e.target.files[0])}
                    />
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