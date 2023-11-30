import React from 'react'
import "./Component.css";


function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary nav-container"
        // style={{ background: "#CADC4B"}}
      >
        <div className=" container container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              src="/Assets/mechanic-icon.png"
              alt="House Wise Solutio "
              style={{ width: "80px" }}
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" role="button">
                  Contect Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <img
                src="/Assets/account.png"
                alt="profile"
                srcset=""
                style={{ width: "30px" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar