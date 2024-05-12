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
            <p className="text-lg">JSBookHub: Your Ultimate Destination for JavaScript Learning.</p>
          </div>
          <div className="about-content">
            <h2 className="text-xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
            JSBookHub stands out from existing platforms by offering a curated collection of high-quality 
            JavaScript books, interactive learning tools, personalized recommendations, and a thriving 
            community-driven environment. Whether you're a novice or an expert, JSBookHub empowers you to
             unlock your full potential and excel in JavaScript development.
            </p>
            <p className="mb-8">
            With an extensive collection of JavaScript books, interactive learning resources, and a vibrant
             community, JSBookHub aims to revolutionize the way people learn and engage with JavaScript.
            </p>
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
            At JSBookHub, our mission is to empower individuals worldwide to master JavaScript and unlock 
            their potential as innovative developers. Through our comprehensive collection of high-quality 
            books, interactive learning resources, and vibrant community, we strive to provide accessible, 
            personalized, and engaging learning experiences.
            </p>
            <p className="mb-8">
            By fostering a culture of continuous learning, collaboration, and creativity, we aim to inspire 
            and equip JavaScript enthusiasts at every skill level to thrive in the dynamic landscape of web 
            development."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
