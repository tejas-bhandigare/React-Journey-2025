import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return <h2>Timer: {seconds} seconds</h2>;
}
