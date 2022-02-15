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
                        <Link 
                            key={e.slug}
                            className="card text-decoration-none rounded-5" 
                            style={{ width: "17rem" }} to={`/location/${e.slug}`}
                        >
                            <img className="child " src={e.image} alt={e.slug} />
                            <span className="card-text text-white">{e.city}, {e.country}</span>
                        </Link>  
                    )) :  
                    <p>You don't have any trip plans.</p>
                    
                }   
            </div>
        </div>
    )
}