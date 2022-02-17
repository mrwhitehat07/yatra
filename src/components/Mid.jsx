import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Reset from "../pages/Auth/Reset";
import Location from "../pages/Locations/Location";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Logs from "../pages/Logs/Logs";
import LogDetail from "../pages/Logs/LogDetail";
import ProfileForm from "../pages/Forms/ProfileForm";
import UpdateProfileForm from "../pages/Forms/UpdateProfile";
import TripForm from "../pages/Forms/TripForm";
import PlanForm from "../pages/Forms/PlanForm";
import Plan from "../pages/Plan/Plan";
import Requests from "../pages/Requests/Requests";
import PlanDetail from "../pages/Plan/PlanDetail";
import EditPlanForm from "../pages/Forms/EditPlan";
import UpdateTripForm from "../pages/Forms/LogUpdateForm";

export default function Mid () {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/profile" element={ 
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute> 
                } />
                
                <Route path="/create-profile" element={ <ProfileForm /> } />
                <Route path="/edit-profile" element={ <UpdateProfileForm /> } />
                <Route path="/create-plan" element={ <PlanForm /> } />
                <Route path="/location/:slug" element={ <Location /> } />
                <Route path="/forgot" element={ <Forgot /> } />
                <Route path="/reset-password/:token" element={ <Reset /> } />
                <Route path="/logs" element={ 
                    <ProtectedRoute>
                        <Logs /> 
                    </ProtectedRoute>
                } />
                <Route path="/logs/:slug" element={ <LogDetail /> } />
                <Route path="/trips" element={ <ProtectedRoute><Plan /></ProtectedRoute>} />
                <Route path="/trips/:slug" element={ <ProtectedRoute><PlanDetail /></ProtectedRoute>} />
                <Route path="/trips/edit/:slug" element={ <ProtectedRoute><EditPlanForm /></ProtectedRoute>} />
                <Route path="/requests" element={ <ProtectedRoute><Requests /></ProtectedRoute>} />
                <Route path="/log-form" element={ <ProtectedRoute><TripForm /></ProtectedRoute> } />
                <Route path="/log-update-form/:slug" element={ <ProtectedRoute><UpdateTripForm /></ProtectedRoute> } />
                <Route path="/trip-form" element={ <ProtectedRoute><PlanForm /></ProtectedRoute> } />
            </Routes>
        </>
    )
}