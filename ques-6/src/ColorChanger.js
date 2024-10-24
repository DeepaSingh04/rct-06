// ColorChanger.js
import React, { useRef } from 'react';

const ColorChanger = () => {
  const divRef = useRef();

  const handleChangeColor = () => {
    // Change the background color of the div
    divRef.current.style.backgroundColor = 
      divRef.current.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  };

  return (
    <div>
      <h2>Change Background Color</h2>
      <div
        ref={divRef}
        onClick={handleChangeColor}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
          cursor: 'pointer',
        }}
      >
        Click me to change color
      </div>
    </div>
  );
};

export default ColorChanger;
