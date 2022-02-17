import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getLogsBySlug } from "../../data/logs";
import dateFormat from 'dateformat';
import "./Logs.css";
import { UserContext } from "../../App";

export default function LogDetail () {

    const [logs, setLogs] = useState({
        location: {},
        logs: {},
        user: {}
    });
    const { slug } = useParams();
    const userContext = useContext(UserContext);

    useEffect(() => {   
        async function getLogs(){
            const locs = await getLogsBySlug(slug);
            setLogs(locs);
        }
        getLogs();
    },[slug]);

    return (
        <div className="container">
            <div className="d-flex flex-row justify-space-evenly">  
                <div className="content-container p-3">  
                    <img className="log-img-container" src={logs.logs.image} alt={logs.slug} />
                    <div className="detail-header">
                        <h1 className="card-text">{logs.logs.title}</h1>
                        <p className="text-dark">{dateFormat(logs.logs.updatedAt, "mmmm d, yyyy")}</p>
                    </div>
                    <p className="card-text mt-2">Visit Date: {dateFormat(logs.logs.visitDate, "mmmm d, yyyy")}</p>
                    <p className="card-text mt-2">{logs.logs.description}</p>
                </div>
                <div className="user-container p-4">
                    <img
                        src={logs.user.avtar}
                        className="rounded-circle mt-5"
                        height="80"
                        alt={logs.user.fullname}
                        loading="lazy"
                    />
                    <h4 className="card-text mt-2">{logs.user.fullname}</h4>
                    { (logs.user.user ===  userContext.user._id) ? <p>Edit</p> : ""}
                    <hr />
                    <p className="text-dark">{logs.user.bio}</p>
                    <hr />
                    <div>
                        <h6>More from {logs.user.fullname}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}