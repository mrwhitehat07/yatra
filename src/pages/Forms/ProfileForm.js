import { useState } from "react";
import { createProfile } from "../../data/auth";
import { useNavigate } from "react-router-dom";

export default function ProfileForm () {

    const [fullname, setFullname] = useState("");
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
    const [avtar, setAvtar] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('avtar', avtar);
        formData.append('fullname', fullname);
        formData.append('bio', bio);
        formData.append('address', address);
        let res = await createProfile(formData);
        if (res === "profile created successfully"){
            navigate('/profile');
        }
        else {
            alert(res);
        }
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form>
                <h2 className="my-3">Create Profile</h2>
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
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="bio" className="form-label">Bio</label>
                    <textarea 
                        className="form-control" 
                        id="bio" 
                        rows="3"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}