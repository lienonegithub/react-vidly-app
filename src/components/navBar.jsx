import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>

          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>

          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-link text-primary" to="/login">
                Login
              </NavLink>

              <NavLink className="nav-link text-info" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-link text-primary" to="/profile">
                {user.name}
              </NavLink>

              <NavLink className="nav-link text-info" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
