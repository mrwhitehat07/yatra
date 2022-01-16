import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Product from "./Locations/Location";
import Register from "../pages/Auth/Register";

export default function Mid () {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/location/:slug" element={ <Product /> } />
            </Routes>
        </>
    )
}