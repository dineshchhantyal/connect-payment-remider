/**
 * This function calculates
 * @param timestampInMilliSeconds
 * @returns object
 */
function calculateRemainingTime(timestampInMilliSeconds: number): {
  days: number;
  hours: number;
  minutes: number;
} {
  const targetDate = new Date(timestampInMilliSeconds);
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
}

export default calculateRemainingTime;
