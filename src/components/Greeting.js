import React from 'react';

const Greeting = ({ name, partOfDay }) => {
  return (
    <div>
      <span>{name}</span> Good {partOfDay}!
    </div>
  );
};

export default Greeting;
