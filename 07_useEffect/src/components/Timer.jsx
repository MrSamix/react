import { useEffect } from "react";
import { useState } from "react"

function Timer() {

  const [currentTime, setCurrentTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const startTimer = () => {
    setCurrentTime(+inputValue);
    setPaused(false);
  };

  const pauseTimer = () => {
    setPaused((prev) => !prev);
  };

  const stopTimer = () => {
    setCurrentTime(0);
    setPaused(false);
  };

  useEffect(() => {
    let timer;
    if (currentTime > 0 && !paused) {
      timer = setTimeout(() => {
        setCurrentTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [currentTime, paused]);

  return (
    <div>
      <h1>Timer</h1>
      <input
        type="number"
        placeholder="Enter a second"
        min={1}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="startBtn" onClick={startTimer} disabled={currentTime > 0 && !paused}>
        Start
      </button>
      <button onClick={pauseTimer}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={stopTimer}>Clear</button>
      <div className="timer">
        <p>Time: <b>{currentTime}</b></p>
      </div>
    </div>
  );
}

export default Timer