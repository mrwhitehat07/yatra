import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ user }) {

  const token = localStorage.getItem('token');

  return (
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand mt-2 mt-lg-0" href="/">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/logs">My Logs</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">Plans</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">Requests</Link>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        {
          (user === "Token expired" || token === null) ? 
          <Link to="/login" className="btn btn-primary">Login</Link> :
          <Link className="d-flex flex-row justify-content-evenly text-decoration-none" to="/profile">
            <div className="">
              <img
                src={user.avtar}
                className="rounded-circle"
                height="40"
                alt={user._id}
                loading="lazy"
              />
            </div>
            <div className="align-center py-2">
              <p className="text-black text-decoration-none">{user.fullname}</p>
            </div>
          </Link>
        }
      </div>
    </div>
  </nav>
  )
}
