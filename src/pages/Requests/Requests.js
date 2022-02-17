import { useState, useEffect } from "react";
import { acceptRequest, declineRequest, getUserRequests } from "../../data/requests";
import "./Request.css";

export default function Requests() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function getRequests() {
            const res = await getUserRequests();
            setRequests(res);
            return res;
        }
        getRequests();
    }, [])
    
    const accept = async (slug, id) => {
        const trip = {
            trip: slug
        }
        const res = await acceptRequest(trip, id);
        alert(res);
        window.location.reload(true);
    }

    const decline = async (slug, id) => {
        const trip = {
            trip: slug
        }
        const res = await declineRequest(trip, id);
        alert(res);
        window.location.reload(true);
    }

    return (
        <div className="container py-2">
            <h3>Your Requests</h3>
            {
                (requests.length !== 0) ?
                requests.map((request) => (
                    <div class="card" key={request._id}>
                        <div class="card-body w-80">
                            {request.sender} asked you to join on his trip {request.trip}. Want to join this trip?
                        </div>
                        <div>
                            <div className="d-flex flex-row float-end mr-2 mb-3">
                                <button 
                                    type="button" 
                                    className="btn d-flex flex-row"
                                    onClick={() => accept(request.trip, request._id)}
                                >
                                    <i className="bi bi-check" style={{ fontSize: "30px", color: "green" }}></i>
                                    <p className="m-auto">Accept</p>
                                </button>
                                <button 
                                    type="button" 
                                    className="btn d-flex flex-row"
                                    onClick={() => decline(request.trip, request._id)}
                                >
                                    <i className="bi bi-x" style={{ fontSize: "30px", color: "red" }}></i>
                                    <p className="m-auto" value={request.trip}>Decline</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                : <p>You don't have any requests now.</p>
            }
        </div>
    )
}