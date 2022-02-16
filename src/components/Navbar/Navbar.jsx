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
        data-bs-target="navbarTogglerDemo01" 
        aria-controls="navbarTogglerDemo01" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
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
            <Link class="nav-link" to="/trips">Plans</Link>
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
            <div className="">
              {
                (user.message !== "No Profile") ? 
                <Link to="/profile" className=" d-flex flex-row text-decoration-none">
                  <img
                    src={user.avtar}
                    className="rounded-circle mx-2"
                    height="40"
                    alt={user._id}
                    loading="lazy"
                  /> 
                  <p className="navtext text-dark text-decoration-none font-weight-bold my-auto">{user.fullname}</p>
                </Link>
                : 
                <Link to="/create-profile" className="text-decoration-none">
                  <div className="mx-3 d-flex">
                    <i className="bi bi-person-circle mx-2" style={{ color: "#000", fontSize: "30px" }}></i>
                    <p className="navtext text-dark text-decoration-none font-weight-bold my-auto">Profile</p>
                  </div>
                </Link>
              }
            </div>
        }
      </div>
    </div>
  </nav>
  )
}
