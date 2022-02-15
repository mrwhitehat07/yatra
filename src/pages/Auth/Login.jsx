import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../data/auth";

export default function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email, password
        } 
        const res = await login(data);
        if (res === "success"){
            navigate("/");
            window.location.reload(true);
        } 
        else {
            alert(res);
        }
    }

    return (
    <div className="container d-flex flex-row justify-content-center align-center">
        <form className="form-group" onSubmit={handleSubmit}>
            <h2 className="my-3">Login</h2>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
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
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button><br />
            <label className="my-3 form-check-label" for="register">Don't have an accounnt? <Link to="/register" className="text-decoration-none">Register</Link></label><br />
            <label className="my-3 form-check-label" for="register"><Link to="/forgot" className="text-decoration-none">Forgot Password?</Link></label>
        </form>
    </div>
    )
}