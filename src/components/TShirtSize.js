import React, { useState } from 'react';
import './TshirtOptions.css'; // Import CSS file for styling

function TshirtOptions() {
  const defaultShoulderSize = '30'; // Default shoulder size is set to 30cm
  const defaultNeckSize = '40'; // Default neck size is set to 40cm
  const [shoulderSize, setShoulderSize] = useState(defaultShoulderSize);
  const [neckSize, setNeckSize] = useState(defaultNeckSize);
  const [selectedOption, setSelectedOption] = useState('');

  const handleShoulderSizeChange = (event) => {
    setShoulderSize(event.target.value);
    setSelectedOption('shoulder'); // Automatically select shoulder when size is changed
  };

  const handleNeckSizeChange = (event) => {
    setNeckSize(event.target.value);
    setSelectedOption('neck'); // Automatically select neck when size is changed
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
          <li style={{marginTop:"-24rem", marginLeft:"130px"}}>
            {selectedOption === 'neck' ? ` ${neckSize || defaultNeckSize}cm` : '40cm'}
          </li>
          <li style={{marginTop:"51px", marginLeft:"243px"}}>
            {selectedOption === 'shoulder' ? ` ${shoulderSize || defaultShoulderSize}cm` : '30cm'}
          </li>
        </ul>
      </div>

      <div className="size-form">
        <form>
          <h3>Write your size to update the T-shirt size</h3>
          <div>
            <label>
              Neck Size:
              <input type="text" value={neckSize} onChange={handleNeckSizeChange} />
            </label>
          </div>
          <div>
            <label>
              Hand Size:
              <input type="text" value={shoulderSize} onChange={handleShoulderSizeChange} />
            </label>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default TshirtOptions;
