import React from 'react';

const PageHeading = ({ text }) => {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4">
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  );
};

export default PageHeading;
