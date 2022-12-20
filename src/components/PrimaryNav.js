import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./PrimaryNav.css";

function PrimaryNav() {
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);
  const handleChange = () => {
    setInputValue(searchRef.current.value);
  };
  const handleSubmit = () => {
    // console.log(inputValue)
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-style">
        <div className="container">
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link current-item" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/promo">
                  Promo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <form onSubmit={handleSubmit()}>
              <input
                ref={searchRef}
                name="inputVal"
                type="text"
                placeholder="Search what you need"
                onChange={() => handleChange()}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="user-menu">
            <div className="user-menu__icon wish-list">
              <Link to="/wishlist">
                <i className="fa fa-heart"></i>
              </Link>
            </div>
            <div className="user-menu__icon cart">
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            </div>
            <div className="user-menu__icon user-profile">
              <Link to="/user-profile">
                <i className="fa fa-user"></i>
              </Link>
            </div>
            <div className="user-menu__icon bell">
              <Link to="/notification">
                <i className="fa fa-bell"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PrimaryNav;
