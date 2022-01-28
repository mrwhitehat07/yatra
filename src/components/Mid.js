import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Product from "./Locations/Location";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Reset from "../pages/Auth/Reset";

export default function Mid () {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/location/:slug" element={ <Product /> } />
                <Route path="/forgot" element={ <Forgot /> } />
                <Route path="/reset-password/:token" element={ <Reset /> } />
            </Routes>
        </>
    )
}