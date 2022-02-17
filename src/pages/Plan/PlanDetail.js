import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat';
import "./Plan.css";
import { getTripsBySlug, inviteToTrip } from "../../data/trips";

export default function PlanDetail () {

    const [plan, setPlan] = useState({
        host: {},
        trip: {},
        members: []
    });
    const [email, setEmail] = useState("");
    const { slug } = useParams();

    useEffect(() => {   
        async function getPlan(){
            const locs = await getTripsBySlug(slug);
            setPlan(locs);
        }
        getPlan();
    },[slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await inviteToTrip(email, slug);
        alert(res);
        setEmail("");
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-space-evenly">  
                <div className="content-container p-3">  
                    <div className="detail-header">
                        <h1 className="card-text">{plan.trip.title}</h1>
                        <p className="text-dark">{dateFormat(plan.trip.updatedAt, "mmmm d, yyyy")}</p>
                    </div>
                    <p className="card-text mt-2">Visit Date: {dateFormat(plan.trip.visitDate, "mmmm d, yyyy")}</p>
                    <p className="card-text mt-2">{plan.trip.description}</p>
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
                    <h4 className="card-text mt-3">Hosted By</h4>
                    <img
                        src={plan.host.avtar}
                        className="rounded-circle mt-2"
                        height="80"
                        alt={plan.host.fullname}
                        loading="lazy"
                    />
                    <h4 className="card-text mt-2">{plan.host.fullname}</h4>
                    <hr />
                    <div>
                        <h6 className="mb-3">Members</h6>
                        {
                            plan.members.map((member) => (
                                <div className="d-flex flex-row">
                                    <img
                                        src={member.avtar}
                                        className="rounded-circle mt-2"
                                        height="80"
                                        alt={member.fullname}
                                        loading="lazy"
                                    />
                                    <h4 className="card-text mt-2">{member.fullname}</h4>
                                </div>
                            ))
                        }
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    )
}