import { useState, useEffect } from "react";
import { profile, updateProfile, updateProfileImage } from "../../data/auth";
import "./Form.css";

export default function UpdateProfileForm () {

    const [userProfile, setUserProfile] = useState({});
    const [fullname, setFullname] = useState("");
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
    const [avtar, setAvtar] = useState(null);

    useEffect(() => {
        async function getUser() {
            const userProfile = await profile();
            setUserProfile(userProfile);
        }
        getUser();
        console.log(userProfile);
    }, [])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            fullname, 
            bio,
            address
        }
        let res = await updateProfile(data);
        console.log(res);
    }

    const updateImage = async (e) => {
        e.preventDefault(); 
        console.log(avtar);
        if (avtar === null) {
            alert("No image selected");
        }
        else {
            const formData = new FormData();
            formData.append('avtar', avtar);
            let res = await updateProfileImage(formData);
            console.log(res);
        }
    }

    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form>
                <h2 className="my-3">Update Profile</h2>
                <div className="mb-3 align-center">
                    <img src={userProfile.avtar} className="img-circle mx-auto" />
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Avatar</label>
                    <div className="d-flex flex-row justify-space-between align-items-center">
                        <input 
                            className="form-control mb-3 mx-3"
                            type="file"  
                            onChange={e => setAvtar(e.target.files[0])}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={updateImage}
                        >Update</button>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Fullname</label>
                    <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        aria-describedby="nameHelp"
                        placeholder={userProfile.fullname}
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
                        placeholder={userProfile.bio}
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
                    placeholder={userProfile.address}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
    )
}