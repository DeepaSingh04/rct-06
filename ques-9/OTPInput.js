import React, { useState, useRef } from "react";
import "./OTPInput.css"; // Import CSS for styling

const OTPInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill("")); // State to store OTP digits
  const inputRefs = useRef([]); // Array of refs for managing focus

  // Handle Input Change
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input box if value is entered
      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle Backspace Key
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle Paste Event
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];

    pastedData.split("").forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);

    // Focus the last input box filled
    const lastFilledIndex = Math.min(pastedData.length - 1, length - 1);
    inputRefs.current[lastFilledIndex].focus();
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    alert(`Entered OTP: ${enteredOtp}`);
    console.log("Entered OTP:", enteredOtp);
  };

  // Check if all input boxes are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <form onSubmit={handleSubmit} className="otp-form">
      <div className="otp-input-container">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
      </div>
      <button type="submit" disabled={!isOtpComplete} className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default OTPInput;
