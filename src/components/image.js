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

  const [xCoord, yCoord] = currentCoords.split(', '); // Splitting the currentCoords string into X and Y components

  return (
    <div className="card">
      <div className="card-body">
        <img
          id="image"
          src="https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          alt="Penguin"
          className="card-img-top"
        />
        <div className="coordinates">
            <h3>Coordinates</h3>
          <label htmlFor="image_coords_x">X:</label>
          <input
            type="text"
            id="image_coords_x"
            value={xCoord || '\u00A0'} // Displaying X coordinate
            readOnly
          />
          <br/>
          <label htmlFor="image_coords_y">Y:</label>
          <input
            type="text"
            id="image_coords_y"
            name='Y'
            value={yCoord || '\u00A0'} // Displaying Y coordinate
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithCoords;
