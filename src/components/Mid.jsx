import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Reset from "../pages/Auth/Reset";
import Location from "../pages/Locations/Location";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../protectedRoute/protectedRoute";

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
                <Route path="/location/:slug" element={ <Location /> } />
                <Route path="/forgot" element={ <Forgot /> } />
                <Route path="/reset-password/:token" element={ <Reset /> } />
            </Routes>
        </>
    )
}