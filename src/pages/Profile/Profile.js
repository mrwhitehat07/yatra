import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logout, profileDetail } from "../../data/auth";

export default function Profile () {

    const [userProfile, setUserProfile] = useState({
        address: '',
        avtar: '',
        bio: '',
        fullname: ''
    });
    const [images, setImages] = useState([""]);
    const [imageCount, setImageCount] = useState(0);
    const [logCount, setLogCount] = useState(0);
    const [planCount, setPlanCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProfile() {
            const user = await profileDetail();
            if (user === "Token expired"){
                Navigate({ to: "/login" });
            }
            setUserProfile(user.profile);
            setImages(user.logImages);
            setImageCount(user.imageCount);
            setLogCount(user.logCount);
            setPlanCount(user.planCount);
        }
        getProfile();
    }, []);

    return (
        <div className="container">
            <section class="h-100 gradient-custom-2">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                                    <div class="ms-4 mt-5 d-flex flex-column" style={{ width: 150+"px" }}>
                                        <img src={userProfile.avtar} alt={userProfile.fullname + "avatar"} class="img-fluid img-thumbnail mt-4 mb-2" style={{ width: "150px", zIndex: 1 }} />
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-dark" 
                                            data-mdb-ripple-color="dark" 
                                            style={{ zIndex: 1 }}
                                            onClick={() => navigate("/edit-profile")}
                                        >
                                            Edit profile
                                        </button>
                                    </div>
                                    <div class="ms-3" style={{ marginTop: "130px" }}>
                                        <h5>{ userProfile.fullname }</h5>
                                        <p>{ userProfile.address }</p>
                                    </div>
                                    <div className="mt-2">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger float-end" 
                                            data-mdb-ripple-color="dark" 
                                            style={{ zIndex: 1 }}
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                                <div class="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div class="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p class="mb-1 h5">{imageCount}</p>
                                            <p class="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div class="px-3">
                                            <p class="mb-1 h5">{logCount}</p>
                                            <p class="small text-muted mb-0">Logs</p>
                                        </div>
                                        <div>
                                            <p class="mb-1 h5">{planCount}</p>
                                            <p class="small text-muted mb-0">Plans</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-4 text-black">
                                    <div class="mb-5">
                                        <p class="lead fw-normal mb-1">Bio</p>
                                        <div class="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                            <p class="font-italic mb-1">{ userProfile.bio }</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row justify-space-between">
                                        <p class="lead fw-normal mb-2">Your Logs Images</p>
                                        {/* <Link to="" className="text-decoration-none">
                                            See More
                                        </Link> */}
                                    </div>
                                    <div class="row g-2">
                                        {
                                            images.map((image) => (
                                                <div class="col mb-2">
                                                    <img src={image} alt="logimages" class="w-100 rounded-3" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}