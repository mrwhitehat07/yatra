import { useState } from "react";
import { forgot } from "../../data/auth";

export default function Forgot () {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email
        } 
        const res = await forgot(data);
        alert(res.data)
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-middle">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Continue</button><br />
            </form>
        </div>
    )
}