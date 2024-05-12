import React from "react";
import { PageHeading, Navbar } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto max-w-7xl">
        <PageHeading text="About Us" />

        <div className="about-us">
          <div className="about-header">
            <h1>About Us</h1>
            <p>Welcome to BookStore! We are passionate about books and sharing knowledge.</p>
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, arcu sed
              consectetur sollicitudin, ipsum turpis euismod elit, nec tincidunt tortor odio sit amet
              leo.
            </p>
            <p>
              Fusce suscipit bibendum libero, id vestibulum metus. Nullam sodales ex sed ultricies
              aliquet.
            </p>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum diam sit amet
              eros fringilla, a accumsan mauris finibus.
            </p>
            <p>
              Quisque mollis arcu nec turpis convallis, vel vehicula. odio tincidunt. Aenean at nibh
              vitae felis dictum scelerisque.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
