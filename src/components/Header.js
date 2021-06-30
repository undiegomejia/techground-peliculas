import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3" >
            <Link className="navbar-brand" to="/">
              MovieTime
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  WishList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/completed">
                  Completed
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-secondary text-white" to="/search">
                  Search Movie
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};