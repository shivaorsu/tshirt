import React, { useState } from 'react';
import './TshirtOptions.css'; // Import CSS file for styling

function TshirtOptions() {
  const defaultShoulderSize = '30'; // Default shoulder size is set to 30cm
  const defaultNeckSize = '40'; // Default neck size is set to 40cm
  const [shoulderSize, setShoulderSize] = useState(defaultShoulderSize);
  const [neckSize, setNeckSize] = useState(defaultNeckSize);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleShoulderSizeChange = (event) => {
    setShoulderSize(event.target.value);
  };

  const handleNeckSizeChange = (event) => {
    setNeckSize(event.target.value);
  };

  return (
    <div className="card">
      <h2>T-Shirt Options</h2>
      <img
        src={`https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png`}
        alt="T-shirt"
        className="tshirt-image"
      />
      <div className="options">
        <h3 style={{color:"#000035"}}>Know T-shirt Sizes</h3>
        <ul>
          <li onClick={() => handleOptionClick('neck')} style={{marginTop:"-25rem", marginLeft:"7rem"}}>Neck Size</li>
          <li onClick={() => handleOptionClick('shoulder')} style={{marginTop:"66px", marginLeft:"15rem"}}>Hand Size</li>
        </ul>
      </div>

      <div className="selected-option">
        <h3>Selected Size CM:</h3>
        {selectedOption === 'shoulder' && (
          <p style={{ color: '#007bff' }}>
            Hand Size: {shoulderSize || defaultShoulderSize}cm
          </p>
        )}
        {selectedOption === 'neck' && (
          <p style={{ color: '#007bff' }}>
            Neck Size: {neckSize || defaultNeckSize}cm
          </p>
        )}
      </div>

      <div className="size-form">
        <form>
          <h3>Write your size to update the T-shirt size</h3>
          <div>
            <label>
              Hand Size:
              <input type="text" value={shoulderSize} onChange={handleShoulderSizeChange} />
            </label>
          </div>
          <div>
            <label>
              Neck Size:
              <input type="text" value={neckSize} onChange={handleNeckSizeChange} />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TshirtOptions;
