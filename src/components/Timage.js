import React from 'react';

const Image = ({ handleInputValueChange, coordX, coordY }) => {
  return (
    <div>
      <img
        src={`https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png`}
        alt="T-shirt"
        className="tshirt-image"
      />
     
    </div>
  );
};

export default Image;
