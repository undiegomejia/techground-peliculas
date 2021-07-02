import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3" >
            <Link className="navbar-brand" to="/">
              MovieTime
        </Link>
        <div className="navbar navbar-expand-lg" id="navbarNav">
          <ul className="navbar-nav" >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  WishList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/done">
                  Done Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-secondary text-white" to="/search">
                  Search 
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};