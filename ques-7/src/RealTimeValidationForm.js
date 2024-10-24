// RealTimeValidationForm.js
import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const passwordRef = useRef();
  const [isValid, setIsValid] = useState(null);

  const validatePassword = () => {
    const password = passwordRef.current.value;
    if (password.length >= 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <h2>Real-Time Input Validation</h2>
      <form>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter password (6+ characters)"
          onChange={validatePassword}
        />
        {isValid === true && <p style={{ color: 'green' }}>Password is valid ✅</p>}
        {isValid === false && <p style={{ color: 'red' }}>Password is too short ❌</p>}
      </form>
    </div>
  );
};

export default RealTimeValidationForm;
