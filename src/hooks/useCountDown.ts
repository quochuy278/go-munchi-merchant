import moment from "moment";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: number) => {
  console.log(targetDate)
  const now = moment().format("X");
  const [countDown, setCountDown] = useState<number>(
    Math.abs(targetDate - parseInt(now))
  );
  console.log(countDown)
  var duration: any = moment.duration(countDown * 1000, "milliseconds");
  useEffect(() => {
    const interval = setInterval(() => {
      duration = moment.duration(duration - 1000, "milliseconds");
      setCountDown(duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
