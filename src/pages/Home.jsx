import React from 'react';
import { Navbar, PageHeading } from '../components';
import VideoBackground from './../assets/video-background.mp4';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-slate-500">
        <video muted autoPlay className="w-full">
          <source type="video/mp4" src={VideoBackground} />
        </video>
      </div>

      <PageHeading text="JSBookHub: Your Ultimate Destination for JavaScript Learning" />
      
      <div className="container mx-auto max-w-7xl py-8 px-4">
        <p className="text-lg text-gray-700 mt-4">
          Are you looking to enhance your JavaScript skills and become a proficient developer? Look no further than JSBookHub – your ultimate destination for JavaScript learning! Whether you're a beginner taking your first steps into the world of coding or an experienced developer aiming to sharpen your skills, JSBookHub has everything you need to succeed.
        </p>
      </div>
    </>
  );
};

export default Home;
