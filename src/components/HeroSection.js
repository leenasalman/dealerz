import React from "react";
import './HeroSection.css'

function HeroSection() {
  return (
    <>
      <section className="hero-section section-style">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col"></div>
            <div className="col">
              <div className="hero-section__main-text">
                <h1>Your Premium Sound, Unplugged!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="btn primary-btn" href="#">Find out More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
