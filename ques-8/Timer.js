import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [duration, setDuration] = useState(60); // Initial duration in seconds
  const [remainingTime, setRemainingTime] = useState(60); // Timer countdown
  const [isRunning, setIsRunning] = useState(false); // Start/Pause state

  const intervalRef = useRef(null); // To store the interval ID
  const inputRef = useRef(null); // Input field reference
  const progressBarRef = useRef(null); // Progress bar reference
  const notificationRef = useRef(null); // Notification message reference
  const bgColorRef = useRef(null); // Div with dynamic background color

  // Handle Start Timer
  const startTimer = () => {
    if (isRunning) return; // Prevent multiple intervals
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          notificationRef.current.innerText = "Time's up!";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle Pause Timer
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Handle Reset Timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setRemainingTime(duration);
    notificationRef.current.innerText = ""; // Clear notification
    updateProgressBar(duration); // Reset progress bar
  };

  // Update Progress Bar
  const updateProgressBar = (timeLeft) => {
    const percentage = (timeLeft / duration) * 100;
    progressBarRef.current.style.width = `${percentage}%`;
  };

  // Update Background Color
  useEffect(() => {
    if (remainingTime < 10) {
      bgColorRef.current.style.backgroundColor = "red";
    } else {
      bgColorRef.current.style.backgroundColor = "lightgreen";
    }
    updateProgressBar(remainingTime); // Sync progress bar with remaining time
  }, [remainingTime]);

  // Handle Input Change for Duration
  const handleInputChange = () => {
    const newDuration = parseInt(inputRef.current.value, 10);
    if (!isNaN(newDuration) && newDuration > 0) {
      setDuration(newDuration);
      setRemainingTime(newDuration);
      resetTimer(); // Reset timer with new duration
    }
  };

  return (
    <div ref={bgColorRef} style={{ padding: "20px", textAlign: "center" }}>
      <h1>Advanced Timer with useRef</h1>

      <div style={{ margin: "10px 0" }}>
        <input
          ref={inputRef}
          type="number"
          placeholder="Set duration (seconds)"
          onBlur={handleInputChange}
          style={{ padding: "5px", width: "200px" }}
        />
      </div>

      <div style={{ fontSize: "2rem", margin: "10px 0" }}>
        {Math.floor(remainingTime / 60)}:{("0" + (remainingTime % 60)).slice(-2)}
      </div>

      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          margin: "10px 0",
        }}
      >
        <div
          ref={progressBarRef}
          style={{ height: "100%", backgroundColor: "blue", width: "100%" }}
        ></div>
      </div>

      <div style={{ margin: "10px 0" }}>
        <button onClick={startTimer} style={{ marginRight: "5px" }}>
          Start
        </button>
        <button onClick={pauseTimer} style={{ marginRight: "5px" }}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div ref={notificationRef} style={{ marginTop: "10px", color: "red" }}></div>
    </div>
  );
};

export default Timer;
