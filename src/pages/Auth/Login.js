import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../data/auth";

export default function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        login(data);
        // navigate('/');
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
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" for="remember">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button><br />
            <label className="my-3 form-check-label" for="register">Don't have an accounnt? <Link to="/register">Register</Link></label>
        </form>
    </>
    )
}