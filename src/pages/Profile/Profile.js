import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logout, profile } from "../../data/auth";

export default function Profile () {

    const [userProfile, setUserProfile] = useState({
        address: '',
        avtar: '',
        bio: '',
        fullname: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        async function getProfile() {
            const user = await profile();
            if (user === "Token expired"){
                Navigate({ to: "/login" });
            }
            setUserProfile(user);
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
                        <div>
                            <button 
                                type="button" 
                                class="btn btn-outline-danger" 
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
                            <p class="mb-1 h5">253</p>
                            <p class="small text-muted mb-0">Photos</p>
                        </div>
                        <div class="px-3">
                            <p class="mb-1 h5">1026</p>
                            <p class="small text-muted mb-0">Followers</p>
                        </div>
                        <div>
                            <p class="mb-1 h5">478</p>
                            <p class="small text-muted mb-0">Following</p>
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
                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="lead fw-normal mb-0">Your Logs</p>
                        <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                        </div>
                        {/* <div class="row g-2">
                        <div class="col mb-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1" class="w-100 rounded-3" />
                        </div>
                        <div class="col mb-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1" class="w-100 rounded-3" />
                        </div>
                        </div>
                        <div class="row g-2">
                        <div class="col">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1" class="w-100 rounded-3" />
                        </div>
                        <div class="col">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1" class="w-100 rounded-3" />
                        </div>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
}