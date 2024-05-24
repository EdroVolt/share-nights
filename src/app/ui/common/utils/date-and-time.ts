import { TimeLeft } from "./types";

/**
 * 
 * @param date the date you want do calculate the difference between it and today date
 * @returns object describing the difference in days, hours, minutes, and seconds
 * @example
 * const dueDate = "2024-06-25T00:00:00";
 * const timeLeft = calculateTimeLeft(dueDate);
 * console.log(timeLeft); // {days: 30, hours: 22, minutes: 48, seconds: 37 }
 */
export const calculateTimeLeft = (date: string): TimeLeft => {
  const difference = +new Date(date) - +new Date();

  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
