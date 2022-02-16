import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPopularLocations } from "../../data/locations";
import { getAllLogs } from "../../data/logs";
import dateFormat from "dateformat";
import "./Home.css";

export default function Home () {

    const [locations, setLocations] = useState([{
        id: '',
        slug: '',
        city: '',
        country: '',
        image: ''
    }]);

    const [logs, setLogs] = useState([{
        image: '',
        title: '',
        visitDate: '',
    }]);

    useEffect(() => {   
        async function getDatas(){
            const locs = await getPopularLocations();
            const log = await getAllLogs();
            setLogs(log);
            setLocations(locs);
        }
        getDatas();
    },[]);

    return (
        <div className="container">
            <h3 className="mb-2">Popular Locations</h3>
            <div className="home-content">  
                {
                    locations.map((e) => (
                        <Link 
                            key={e.slug}
                            className="card text-decoration-none rounded-5" 
                            style={{ width: "17rem" }} to={`/location/${e.slug}`}
                        >
                            <img className="child card-img" src={e.image} alt={e.slug} />
                            <span className="card-text text-white">{e.city}, {e.country}</span>
                        </Link>  
                    ))
                }   
            </div>
            <h3 className="mb-2">Blogs From People</h3>
            <div className="home-content d-flex flex-row justify-content-between">  
                {
                    logs.map((e) => (
                        <Link 
                            key={e.slug}
                            className="card text-decoration-none" 
                            style={{ width: "16rem" }} to={`/logs/${e.slug}`}
                        >
                            <div className="card-header">
                                <img className="card-img" src={e.image} alt={e.slug} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{e.title}</p>
                                <p className="card-text">{dateFormat(e.updatedAt, "dS mmmm, yyyy")}</p>
                            </div>
                        </Link>  
                    ))
                }   
            </div>
        </div>
    )
}