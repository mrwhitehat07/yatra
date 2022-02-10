import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserTrips } from "../../data/trips";
import "./Trip.css";

export default function Trip () {

    const [trips, setTrips] = useState([{}]);

    useEffect(() => {   
        async function getTrips(){
            const locs = await getUserTrips();
            setTrips(locs);
        }
        getTrips();
    },[]);

    return (
        <div className="container">
            <h3>Your Trips</h3>
            <div className="d-flex flex-row justify-content-between">  
                {
                    (trips.length !== 0 ) ? trips.map((e) => (
                        <Link 
                            key={e.slug}
                            className="card text-decoration-none" style={{ width: "16rem" }} to={`/location/${e.slug}`}
                        >
                            <div className="card-header">
                                <img className="img-thumbnail" src={e.image} alt={e.slug} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{e.city}</p>
                                <p className="card-text">{e.country}</p>
                            </div>
                        </Link>  
                    )) : <p>You don't have any trips</p>
                }
                <div className="add-container">

                </div>   
            </div>
        </div>
    )
}