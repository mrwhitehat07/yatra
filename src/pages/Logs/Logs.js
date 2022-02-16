import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserLogs } from "../../data/logs";
import dateFormat from 'dateformat';
import "./Logs.css";

export default function Logs () {

    const [logs, setLogs] = useState([{
        image: '',
        title: '',
        visitDate: Date.now(),
    }]);
    const navigate = useNavigate();

    useEffect(() => {   
        async function getLogs(){
            const locs = await getUserLogs();
            setLogs(locs);
        }
        getLogs();
    },[]);

    return (
        <div className="container">
            <div className="header my-3">
                <h3>Your Travel Logs</h3>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => navigate('/log-form')}
                >
                    <i class="bi bi-plus" style={{ fontSize: 20 }}></i>
                    Add logs
                </button>
            </div>
            <div className="log-container">  
                {
                    (logs.length !== 0 ) ? logs.map((e) => (
                        <Link 
                            key={e.slug}
                            className="mycard card text-decoration-none" style={{ width: "16rem" }} to={`/logs/${e.slug}`}
                        >
                            <div className="img-conatainer">
                                <img className="img-fluid" src={e.image} alt={e.slug} />
                            </div>
                            <p id="log-title" className="text-dark">{e.title}</p>
                            <p id="log-date" className="text-dark">{dateFormat(e.updatedAt, "dS mmmm, yyyy")}</p>
                        </Link>  
                    )) 
                    : <p>You don't have any logs story</p>
                }   
            </div>
        </div>
    )
}