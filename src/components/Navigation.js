import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Dealerz.png";
import './Navigation.css';

function Navigation() {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <Link to="/">
                  <img alt="Dealerz logo" src={Logo} />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="icons-container">
                <div className="icons-container__icon">
                  <Link to="./call-center">
                    <i className="fa fa-phone-alt"></i>
                    <p>Call Center</p>
                  </Link>
                </div>
                <div className="icons-container__icon">
                  <Link to="./shipping-returns">
                    <i className="fa fa-truck"></i>
                    <p>Shipping & Returns</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
