import React from 'react'
import nav_img from "../assets/serene_fully_transparent.png"
import {Link}  from "react-router-dom"
function Header() {
  return (
    <>
        <header>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "rgb(0, 31, 61)", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}
        >
          <div className="container">
            <a className="navbar-brand" href="home.html">
              <img src={nav_img} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"  >
                    contact
                  </Link>
                </li>
              </ul>
              <a className="sign" href="regiester.html">
                <i className="fa-sharp fa-solid fa-right-to-bracket"></i> sign up
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
