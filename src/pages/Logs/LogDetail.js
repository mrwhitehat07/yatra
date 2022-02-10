import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLogsBySlug } from "../../data/logs";
import "./Logs.css";

export default function LogDetail () {

    const [logs, setLogs] = useState({});
    const { slug } = useParams();

    useEffect(() => {   
        async function getLogs(){
            const locs = await getLogsBySlug(slug);
            setLogs(locs);
        }
        getLogs();
    },[]);

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">  
                <div className="card-header">
                    <img className="img-thumbnail" src={logs.image} alt={logs.slug} />
                </div>
                <div className="card-body">
                    <p className="card-text">{logs.city}</p>
                    <p className="card-text">{logs.country}</p>
                </div>        
            </div>
        </div>
    )
}