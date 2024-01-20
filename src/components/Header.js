import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img
              src={require("../img/cutlery.png").default}
              width="50"
              height="50"
            ></img>
            <Link to="/">Restaurant-Buddy</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="btn btn-main">
                My FootPrints
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="btn btn-main">
                Wish Lists
              </Link>
            </li>
            <li>
              <Link to="/search-new" className="btn btn-main">
                Explore New
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
