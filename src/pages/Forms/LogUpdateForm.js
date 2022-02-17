import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllLocations } from "../../data/locations";
import { getLogsBySlug, updateLogImage, updateLogs } from "../../data/logs";
import "./Form.css";

export default function UpdateTripForm () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        city: '',
        country: '',
        image: ''
    }]);
    const [logs, setLogs] = useState({});
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(Date.now());
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        async function getDatas(){
            const logs = await getLogsBySlug(slug);
            const locs = await getAllLocations();
            setLocations(locs);
            setLogs(logs.logs);
        }
        getDatas();
    }, [slug])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            location, 
            title,
            description,
            date
        }
        let res = await updateLogs(slug, data);
        if (res === "updated") {
            // window.location.reload(true);
            navigate("/logs");
        }
        else {
            alert(res);
        }
    }

    const updateImage = async (e) => {
        e.preventDefault();
        if (image === null) {
            alert("No image selected");
        }
        else {
            const formData = new FormData();
            formData.append('image', image);
            let res = await updateLogImage(slug, formData);
            alert(res);
            navigate("/logs");
        }
    }


    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form className="form-group">
                <h1 className="my-3">Update Your Logs</h1>
                <div>
                    <img src={logs.image} alt={logs.slug} className="w-50" />
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <div className="d-flex flex-row justify-space-between align-items-center">
                        <input 
                            className="form-control mb-3 mx-3"
                            type="file"  
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={updateImage}
                        >Update</button>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title" 
                        placeholder={logs.title}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" rows="3" 
                        placeholder={logs.description}
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