import React from "react";
import OTPInput from "./OTPInput";

function App() {
  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <OTPInput length={6} />
    </div>
  );
}

export default App;
