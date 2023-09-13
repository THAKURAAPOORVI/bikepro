import React from "react";
import './style.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="https://adityabhardwaj03.github.io/BikersPlanet/images/hayabusa-removebg-preview.png" height="50px" style={{filter:"invert(100%"}}/>Bikers Planet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white border border-warning rounded" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Places to Ride
                </a>
                <ul className="dropdown-menu nav-bg">
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      CHANDIGARH
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      SHIMLA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      MANALI
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      MUMBAI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      RFC GOA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      BANGLORE
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">FAQs</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn text-white border-white search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
