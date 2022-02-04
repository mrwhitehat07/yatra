import { useState } from "react";
import { register } from "../../data/auth";

export default function Register () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        register(data);
    }

    return (
    <>
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
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="conf-password" className="form-label">Confirm Password</label>
                <input
                type="password"
                className="form-control"
                id="conf-password"
                value={cnfPassword}
                onChange={e => setCnfPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
    )
}