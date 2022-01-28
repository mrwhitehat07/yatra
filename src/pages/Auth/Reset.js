import { useState } from "react";
import { resetPassword } from "../../data/auth";

export default function Reset () {

    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");

    const getToken = () => {
        const url = window.location.href;
        const sliced = url.split("/");
        return sliced[4];
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            password,cnfPassword
        }
        const token = getToken();
        resetPassword(data, token);
    }

    return (
    <>
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
    </>
    )
}