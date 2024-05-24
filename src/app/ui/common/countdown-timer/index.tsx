"use client";

import { useEffect, useState } from "react";
import { CountdownTimerProps } from "./types";
import { TimeLeft } from "../utils/types";
import { calculateTimeLeft } from "../utils/date-and-time";

const CountdownTimer: React.FC<CountdownTimerProps> = ({ dueDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(dueDate)
  );

  const timerComponents: JSX.Element[] = [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dueDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, dueDate]);

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <span
          key={interval}
          className="mx-2 p-2 bg-primary-800 text-white rounded"
        >
          {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div className="flex justify-center items-center">
      {timerComponents.length ? timerComponents : <span>Soon...</span>}
    </div>
  );
};

export default CountdownTimer;
