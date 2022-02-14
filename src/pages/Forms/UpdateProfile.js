import { useState } from "react";

export default function UpdateProfileForm () {

    const [fullname, setFullname] = useState("");
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
    const [avtar, setAvtar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form>
                <h2 className="my-3">Update Profile</h2>
                <div className="mb3 align-center">
                    <label for="image" className="form-label">Avatar</label>
                    <input 
                        className="form-control mb-3"
                        type="file"  
                        onChange={e => setAvtar(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Fullname</label>
                    <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        aria-describedby="nameHelp"

                    />
                </div>
                <div className="mb-3">
                    <label for="bio" className="form-label">Bio</label>
                    <textarea className="form-control" id="bio" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}