import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./images/BAPS.png" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Catagory
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                 Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <utton className="btn btn-outline-success" type="submit">
                Search
              </utton>
            </form>
          </div>
        </div>
      </nav>

      {/* <div className="menuIcon">
      
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div> */}
    </Nav>
  );
};

const Nav = styled.nav`

height: 5.5rem;


justify-content: space-between;
align-items: center;
button{
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  font-weight: 600;
  font-family:san-sarif;
  &:hover{
      color: white;
      background-color: #f9b148;
      transition: 0.5s ease;
      border: 2px solid #f9b148;
  }
}
`;
export default Navbar;
