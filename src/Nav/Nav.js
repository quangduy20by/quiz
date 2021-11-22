import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="/#">
        Todo App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink
            activeClassName="active"
            className="nav-item active"
            exact={true}
            to="/"
          >
            <a href="/#" className="nav-link">
              Home
            </a>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item active"
            to="/todo"
          >
            <a href="/#" className="nav-link">
              Todos
            </a>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
