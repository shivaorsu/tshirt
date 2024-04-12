import React, { useState, useEffect } from 'react';
import './TshirtOptions.css'; // Import CSS file for styling

const TshirtOptions = () => {
  const defaultShoulderSize = '30'; // Default shoulder size is set to 30cm
  const defaultNeckSize = '40'; // Default neck size is set to 40cm
  const [shoulderSize, setShoulderSize] = useState(defaultShoulderSize);
  const [neckSize, setNeckSize] = useState(defaultNeckSize);
  const [selectedOption, setSelectedOption] = useState('');
  const [coordX, setCoordX] = useState('');
  const [coordY, setCoordY] = useState('');
  const [formCount, setFormCount] = useState(1);

  useEffect(() => {
    // Set a default option when the component mounts
    setSelectedOption('neck'); // You can set this to 'shoulder' if you want "Hand" to be the default
  }, []);

  const handleShoulderSizeChange = (event) => {
    setShoulderSize(event.target.value);
  };

  const handleNeckSizeChange = (event) => {
    setNeckSize(event.target.value);
  };

  const handleInputValueChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSelectedOption(inputValue);
    if (inputValue === 'neck') {
      setCoordX('X: 50');
      setCoordY('Y: 100');
    } else if (inputValue === 'hand') {
      setCoordX('X: 75');
      setCoordY('Y: 75');
    } else {
      setCoordX('');
      setCoordY('');
    }
  };

  const [currentCoords, setCurrentCoords] = useState('');

  const handleMouseMove = (event) => {
    const currentX = Math.round(event.pageX - event.target.offsetLeft);
    const currentY = Math.round(event.pageY - event.target.offsetTop);
    setCurrentCoords(`${currentX}, ${currentY}`);
  };

  const handleMouseLeave = () => {
    setCurrentCoords('');
  };

  const handleAddForm = () => {
    setFormCount(formCount + 1);
  };

  const handleDeleteForm = () => {
    if (formCount > 1) {
      setFormCount(formCount - 1);
    }
  };

  const [xCoord, yCoord] = currentCoords.split(', '); 

  return (
    <div className="card">
      <h2>T-Shirt Options</h2>
      <img
        src={`https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png`}
        alt="T-shirt"
        className="tshirt-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="size-form">
        <form>
          <h3>T-shirt size</h3>
          {[...Array(formCount)].map((_, index) => (
            <div key={index}>
              <label>
                Enter 'Neck' or 'Hand':
                <input type="text" onChange={handleInputValueChange} />
              </label>
              {coordX && coordY && (
                <div>
                  <label>
                    Coordinates:
                    <input type="text" value={coordX} readOnly />
                    <input type="text" value={coordY} readOnly />
                  </label>
                </div>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddForm}>Add Form</button>
          <button type="button" onClick={handleDeleteForm}>Delete Form</button>
        </form>
      </div>
      <div className="card-body">
        {['neck', 'hand'].includes(selectedOption.toLowerCase()) && (
          <div className="coordinates">
            <h3>Coordinates</h3>
            <label htmlFor="image_coords_x">X:</label>
            <input
              type="text"
              id="image_coords_x"
              value={xCoord || '\u00A0'} // Displaying X coordinate
              readOnly
            />
            <br />
            <label htmlFor="image_coords_y">Y:</label>
            <input
              type="text"
              id="image_coords_y"
              name='Y'
              value={yCoord || '\u00A0'} // Displaying Y coordinate
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtOptions;
