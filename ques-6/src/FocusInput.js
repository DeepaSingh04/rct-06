// FocusInput.js
import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef();

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
};

export default FocusInput;
