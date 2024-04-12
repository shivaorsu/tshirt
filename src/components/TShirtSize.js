import React, { useState, useEffect } from 'react';
import './TshirtOptions.css'; // Import CSS file for styling

const TshirtOptions = () => {
  const [forms, setForms] = useState([{ inputValue: '', coordX: '', coordY: '' }]);
  const [formCount, setFormCount] = useState(1);
  const [currentCoords, setCurrentCoords] = useState('');

  useEffect(() => {
    // Set a default option when the component mounts
    setForms([{ inputValue: '', coordX: '', coordY: '' }]);
  }, []);

  const handleInputValueChange = (index, event) => {
    const { value } = event.target;
    const updatedForms = [...forms];
    updatedForms[index].inputValue = value.toLowerCase();
    if (value.toLowerCase() === 'neck') {
      updatedForms[index].coordX = 'X: '; // Clear the X coordinate
      updatedForms[index].coordY = 'Y: '; // Clear the Y coordinate
    } else if (value.toLowerCase() === 'hand') {
      updatedForms[index].coordX = 'X: '; // Clear the X coordinate
      updatedForms[index].coordY = 'Y: '; // Clear the Y coordinate
    } else {
      // If neither 'neck' nor 'hand' is selected, clear the coordinates
      updatedForms[index].coordX = '';
      updatedForms[index].coordY = '';
    }
    setForms(updatedForms);
  };

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
    setForms([...forms, { inputValue: '', coordX: '', coordY: '' }]);
  };

  const handleDeleteForm = () => {
    if (formCount > 1) {
      setFormCount(formCount - 1);
      setForms(forms.slice(0, -1));
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
          {forms.map((form, index) => (
            <div key={index}>
              <label>
                Enter 'Neck' or 'Hand':
                <input type="text" value={form.inputValue} onChange={(e) => handleInputValueChange(index, e)} />
              </label>
              {form.coordX && form.coordY && (
                <div>
                  <label>
                    Coordinates:
                    <input type="text" value={form.coordX} onChange={(e) => setForms(forms.map((f, i) => (i === index ? { ...f, coordX: e.target.value } : f)))} />
                    <input type="text" value={form.coordY} onChange={(e) => setForms(forms.map((f, i) => (i === index ? { ...f, coordY: e.target.value } : f)))} />
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
        {forms.map((form, index) => (
          ['neck', 'hand'].includes(form.inputValue.toLowerCase()) && (
            <div key={index} className="coordinates">
              <h3>Coordinates</h3>
              <label htmlFor={`image_coords_x_${index}`}>X:</label>
              <input
                type="text"
                id={`image_coords_x_${index}`}
                value={xCoord || '\u00A0'} // Displaying X coordinate
                readOnly
              />
              <br />
              <label htmlFor={`image_coords_y_${index}`}>Y:</label>
              <input
                type="text"
                id={`image_coords_y_${index}`}
                name={`Y_${index}`}
                value={yCoord || '\u00A0'} // Displaying Y coordinate
                readOnly
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default TshirtOptions;
