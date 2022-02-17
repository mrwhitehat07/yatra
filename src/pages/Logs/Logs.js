import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteLogs, getUserLogs } from "../../data/logs";
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

    const deleteLog = async (slug) => {
        const res = await deleteLogs(slug);
        alert(res);
        window.location.reload(true);
    }

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
                        
                    <div 
                        key={e.slug}
                        className="mycard card text-decoration-none" style={{ width: "16rem" }}
                    >
                        <div className="img-conatainer">
                            <img className="img-fluid" src={e.image} alt={e.slug} />
                        </div>
                        <p id="log-title" className="text-dark">{e.title}</p>
                        <p id="log-date" className="text-dark">{dateFormat(e.updatedAt, "dS mmmm, yyyy")}</p>
                        <div className="d-flex flex-row justify-content-between bg-light">
                            <div className="float-left">
                                <Link to={"/logs/"+e.slug} className="btn btn-light rounded">
                                    <i className="bi bi-eye-fill" style={{ fontSize: "22px" }}></i>
                                </Link>
                            </div>
                            <div className="d-flex flex-row float-right">
                                <Link to={"/log-update-form/"+e.slug} className="btn btn-light rounded mx-2">
                                    <i className="bi bi-pencil-fill" style={{ fontSize: "22px", color: "#add8e6" }}></i>
                                </Link>
                                <button 
                                    className="btn btn-light rounded"
                                    onClick={() => deleteLog(e.slug)}
                                >
                                    <i className="bi bi-trash-fill" style={{ fontSize: "22px", color: "#b22222" }}></i>
                                </button>
                            </div>
                        </div>
                    </div>  
                        
                    )) 
                    : <p>You don't have any logs story</p>
                }   
            </div>
        </div>
    )
}