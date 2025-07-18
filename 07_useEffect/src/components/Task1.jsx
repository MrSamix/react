import { useState, useEffect } from "react";

function Task1() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
}, []);

  return (
    <div>
      Current time: {time.toLocaleTimeString()}
    </div>
  );
}

export default Task1;