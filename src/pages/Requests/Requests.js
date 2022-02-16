import { useState, useEffect } from "react";
import { getUserRequests } from "../../data/requests";

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
    

    return (
        <div className="container py-2">
            {
                (requests.length !== 0) ?
                requests.map((request) => (
                    <div class="card">
                        <div class="card-body">
                            {request._id}
                        </div>
                    </div>
                ))
                : <p>You don't have any requests now.</p>
            }
        </div>
    )
}