import React, { useState } from 'react';
import './ImageWithCoords.css'; // Import CSS for styling

const ImageWithCoords = () => {
  const [currentCoords, setCurrentCoords] = useState('');

  const handleMouseMove = (event) => {
    const currentX = Math.round(event.pageX - event.target.offsetLeft);
    const currentY = Math.round(event.pageY - event.target.offsetTop);
    setCurrentCoords(`${currentX}, ${currentY}`);
  };

  const handleMouseLeave = () => {
    setCurrentCoords('');
  };

  const handleClick = () => {
    if (currentCoords) {
      document.getElementById('image_coords_click').innerHTML = `Last click: ${currentCoords}.`;
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <span id="image_coords_click"></span>
        <span id="image_coords_now">{currentCoords ? `Current: ${currentCoords}.` : '\u00A0'}</span>

        <img
          id="image"
          src="https://inkplant.com/images/inkplant/code/penguin.jpg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          alt="Penguin"
          className="card-img-top"
        />
      </div>
    </div>
  );
};

export default ImageWithCoords;
