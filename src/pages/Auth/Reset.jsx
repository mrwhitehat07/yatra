import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../data/auth";

export default function Reset () {

    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            newPassword: password,
            cnfPassword: cnfPassword
        }
        const res = await resetPassword(data, token);
        alert(res);
        navigate('/login');
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-middle">
            <form onSubmit={handleSubmit}>
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
        </div>
    )
}