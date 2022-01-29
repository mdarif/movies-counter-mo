import React from "react";
import { NavLink as Link } from "react-router-dom";

export const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Vidly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/movies"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/customers"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/rentals"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Rentals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
