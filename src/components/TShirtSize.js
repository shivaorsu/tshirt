import React, { useState, useEffect } from 'react';
import './TshirtOptions.css'; // Import CSS file for styling

function TshirtOptions() {
  const defaultShoulderSize = '30'; // Default shoulder size is set to 30cm
  const defaultNeckSize = '40'; // Default neck size is set to 40cm
  const [shoulderSize, setShoulderSize] = useState(defaultShoulderSize);
  const [neckSize, setNeckSize] = useState(defaultNeckSize);
  const [selectedOption, setSelectedOption] = useState('');
  const [coordX, setCoordX] = useState('');
  const [coordY, setCoordY] = useState('');

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

  return (
    <div className="card">
      <h2>T-Shirt Options</h2>
      <img
        src={`https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png`}
        alt="T-shirt"
        className="tshirt-image"
      />
      <div className="size-form">
        <form>
          <h3>T-shirt size</h3>
         
          <div>
            <label>
              Enter 'Neck' or 'Hand':
              <input type="text" onChange={handleInputValueChange} />
            </label>
          </div>
          {coordX && coordY && (
            <div>
              <label>
                Coordinates:
                <input type="text" value={coordX} readOnly />
                <input type="text" value={coordY} readOnly />
              </label>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default TshirtOptions;
