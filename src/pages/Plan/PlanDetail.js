import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat';
import "./Plan.css";
import { getTripsBySlug, inviteToTrip } from "../../data/trips";

export default function PlanDetail () {

    const [plan, setPlan] = useState({
        host: {},
        trip: {},
        // members: []
    });
    const [email, setEmail] = useState("");
    const { slug } = useParams();

    useEffect(() => {   
        async function getPlan(){
            const locs = await getTripsBySlug(slug);
            setPlan(locs.trip);
        }
        getPlan();
    },[slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await inviteToTrip(email, slug);
        console.log(res);
        alert(res)
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-space-evenly">  
                <div className="content-container p-3">  
                    <div className="detail-header">
                        <h1 className="card-text">{plan.title}</h1>
                        <p className="text-dark">{dateFormat(plan.updatedAt, "mmmm d, yyyy")}</p>
                    </div>
                    <p className="card-text mt-2">Visit Date: {dateFormat(plan.visitDate, "mmmm d, yyyy")}</p>
                    <p className="card-text mt-2">{plan.description}</p>
                </div>
                <div className="user-container p-4">
                    <div className="mb-3">
                        <div className="d-flex flex-row">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="some@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-primary mt-3"
                                onClick={handleSubmit}
                            >
                                Invite
                            </button>
                        </div>
                    </div>
                    <img
                        src={plan.host.avtar}
                        className="rounded-circle mt-5"
                        height="80"
                        alt={plan.host.fullname}
                        loading="lazy"
                    />
                    <h4 className="card-text mt-2">{plan.host.fullname}</h4>
                    <hr />
                    <div>
                        <h6>Members</h6>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    )
}