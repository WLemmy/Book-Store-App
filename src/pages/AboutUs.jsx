import React from "react";
import { PageHeading, Navbar } from "../components";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto max-w-7xl py-8 px-4">
        <PageHeading text="About Us" />

        <div className="about-us mt-8">
          <div className="about-header mb-8">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="text-lg">Welcome to BookStore! We are passionate about books and sharing knowledge.</p>
          </div>
          <div className="about-content">
            <h2 className="text-xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, arcu sed
              consectetur sollicitudin, ipsum turpis euismod elit, nec tincidunt tortor odio sit amet
              leo.
            </p>
            <p className="mb-8">
              Fusce suscipit bibendum libero, id vestibulum metus. Nullam sodales ex sed ultricies
              aliquet.
            </p>
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum diam sit amet
              eros fringilla, a accumsan mauris finibus.
            </p>
            <p className="mb-8">
              Quisque mollis arcu nec turpis convallis, vel vehicula odio tincidunt. Aenean at nibh
              vitae felis dictum scelerisque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
