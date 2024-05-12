import React from 'react';
import { Navbar, PageHeading } from '../components';
import VideoBackground from './../assets/video-background.mp4';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="relative bg-slate-500">
        <video muted autoPlay className="w-full">
          <source type="video/mp4" src={VideoBackground} />
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col text-center">
          <PageHeading text=" JSBookHub: Your Ultimate Destination for JavaScript Learning" /> 
          <p className="text-lg text-white mt-4">
          <span style={{ color: 'orange', fontWeight: 'bold' }}> Are you looking to enhance your JavaScript skills and become a proficient developer? 
            <br />
            Look no further than JSBookHub – your ultimate destination for JavaScript learning! 
            <br />
            Whether you're a beginner taking your first steps into the world of coding or an 
            <br />
            experienced developer aiming to sharpen your skills, JSBookHub has everything 
            <br />
            you need to succeed.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
