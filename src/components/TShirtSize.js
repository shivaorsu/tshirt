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
          <li onClick={() => handleOptionClick('neck')} style={{ marginTop: "-24rem", marginLeft: "130px" }}>
            Neck
          </li>
          <li onClick={() => handleOptionClick('shoulder')} style={{ marginTop: "51px", marginLeft: "243px" }}>
            Hand
          </li>
        </ul>
      </div>

      {selectedOption && (
        <div className="size-form">
          <form>
            <h3> T-shirt size</h3>
            {selectedOption === 'neck' && (
              <div>
                <label>
                
                  <input type="text" name="neck" value="Neck" readOnly />
                </label>
                <div>
                  <label>
                    Neck Size:
                    <input type="text" value={neckSize} onChange={handleNeckSizeChange} />
                    <input type="text" value={neckSize} onChange={handleNeckSizeChange} />
                  </label>
                </div>
              </div>
            )}
            {selectedOption === 'shoulder' && (
              <div>
                <label>
                 
                  <input type="text" name="shoulder" value="Hand" readOnly />
                </label>
                <div>
                  <label>
                    Hand Size:
                    <input type="text" value={shoulderSize} onChange={handleShoulderSizeChange} />
                    <input type="text" value={shoulderSize} onChange={handleShoulderSizeChange} />
                  </label>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default TshirtOptions;
