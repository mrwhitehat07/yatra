import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserLogs } from "../../data/logs";
import dateFormat from 'dateformat';
import "./Logs.css";

export default function Logs () {

    const [logs, setLogs] = useState([{
        image: '',
        title: '',
        visitDate: '',
    }]);

    useEffect(() => {   
        async function getLogs(){
            const locs = await getUserLogs();
            setLogs(locs);
        }
        getLogs();
    },[]);

    return (
        <div className="container">
            <div className="header">
                <h3>Your Travel Logs</h3>
                <button 
                    type="button" 
                    className="btn btn-primary"
                >
                    <i class="bi bi-plus" style={{ fontSize: 20 }}></i>
                    Add Trips
                </button>
            </div>
            <div className="d-flex flex-row justify-content-between">  
                {
                    (logs.length !== 0 ) ? logs.map((e) => (
                        <Link 
                            key={e.slug}
                            className="card text-decoration-none" style={{ width: "16rem" }} to={`/logs/${e.slug}`}
                        >
                            <div className="card-header">
                                <img className="img-thumbnail" src={e.image} alt={e.slug} />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{e.title}</p>
                                <p className="card-text">{dateFormat(e.updatedAt, "dS mmmm, yyyy")}</p>
                            </div>
                        </Link>  
                    )) : <p>You don't have any logs story</p>
                }   
            </div>
        </div>
    )
}