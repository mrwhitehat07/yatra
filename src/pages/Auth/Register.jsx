import { useState } from "react";
import { register } from "../../data/auth";
import { useNavigate } from "react-router-dom";

export default function Register () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" || password !== "" || cnfPassword !== ""){
            if (password === cnfPassword){
                const data = {
                    email, password
                }
                const res = await register(data);
                if(res === "registered successfully"){
                    setEmail("");
                    setPassword("");
                    setCnfPassword("");
                    navigate('/login');
                }
                else {
                    alert(res);
                }
            }
            else {
                alert("Passwords donot match");
            }
        }
        else {
            alert("Input fields can't be empty")
        }
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-middle">
            <form onSubmit={handleSubmit}>
                <h2 className="my-3">Register</h2>
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
                <div className="mb-3">
                    <label for="conf-password" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="conf-password"
                        value={cnfPassword}
                        onChange={e => setCnfPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}