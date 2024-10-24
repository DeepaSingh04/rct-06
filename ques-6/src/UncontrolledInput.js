// UncontrolledInput.js
import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleShowValue = () => {
    // Retrieve the input value directly from the ref
    alert(`Current Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} type="text" placeholder="Enter something..." />
      <button onClick={handleShowValue}>Show Value</button>
    </div>
  );
};

export default UncontrolledInput;
