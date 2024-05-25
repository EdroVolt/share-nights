import { describe, expect, test } from "@jest/globals";
import { calculateTimeLeft } from "../date-and-time";

describe("calculateTimeLeft utility", () => {
  test("providing calculateTimeLeft with a date in string formate will return countdown object specifying the remaining time", () => {
    const date = "2024-06-25T00:00:00";
    const timeLift = calculateTimeLeft(date);

    expect(timeLift.days).toBeDefined();
    expect(timeLift.hours).toBeDefined();
    expect(timeLift.minutes).toBeDefined();
    expect(timeLift.seconds).toBeDefined();
  });
});
