import { useState, useEffect } from "react";
import { getUserTrips } from "../../data/trips";
import { Link, useNavigate } from "react-router-dom";
import "./Plan.css";

export default function Plan () {

    const [plans, setPlans] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getTripPlans() {
            const res = await getUserTrips();
            setPlans(res);
        }
        getTripPlans()
    }, [])
    

    return (
        <div className="container">
            <div className="header my-3">
                <h3>Your Travel Plans</h3>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => navigate('/trip-form')}
                >
                    <i class="bi bi-plus" style={{ fontSize: 20 }}></i>
                    Add Trips
                </button>
            </div>
            <div className="d-flex flex-row justify-content-between mb-5">  
                {
                    (plans.length !== 0) ?
                    plans.map((e) => (
                        <div 
                            className="card"
                            key={e._id}
                        >
                            <div class="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text text-wrap " style={{ width: 250+"px", height: 50+"px" }}>{e.description}</p>
                                <div className="d-flex flex-row justify-content-between bg-light">
                                    <div className="float-left">
                                        <Link to={"/trips/"+e._id} className="btn btn-light rounded">
                                            <i className="bi bi-eye-fill" style={{ fontSize: "22px" }}></i>
                                        </Link>
                                    </div>
                                    <div className="d-flex flex-row float-right">
                                        <a href="/" className="btn btn-light rounded mx-2">
                                            <i className="bi bi-pencil-fill" style={{ fontSize: "22px", color: "#add8e6" }}></i>
                                        </a>
                                        <a href="/" className="btn btn-light rounded">
                                            <i className="bi bi-trash-fill" style={{ fontSize: "22px", color: "#b22222" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    )) :  
                    <p>You don't have any trip plans.</p>  
                }   
            </div>
        </div>
    )
}