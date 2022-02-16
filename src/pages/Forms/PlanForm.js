import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserTrips } from "../../data/trips";
import { getAllLocations } from "../../data/locations";
import "./Form.css";

export default function PlanForm () {

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
        const data = {
            title,
            description,
            visitDate: date,
            address: location
        }
        const res = await createUserTrips(data);
        if (res === "Trip created successfully"){
            navigate("/trips");
        }
        else {
            alert(res);
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
                    <label for="date" className="form-label">Visite Date</label>
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
                                    {location.city}, {location.country}
                                </option>
                            ))
                        }
                    </select>
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