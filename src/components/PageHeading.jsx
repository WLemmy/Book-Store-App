import React from 'react';

const PageHeading = ({ text }) => {
  // Split the text into an array of words
  const words = text.split(' ');

  return (
    <div className="ctext-lg text-white mt-4 container mx-auto max-w-7xl py-8 px-4">
      <h1 className="text-3xl font-bold">
        {/* Map through the words and apply styles to specific ones */}
        {words.map((word, index) => (
          <span
            key={index}
            className={word === 'JSBookHub:' ? 'text-orange font-bold' : ''}
          >
            {word}{' '}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default PageHeading;
