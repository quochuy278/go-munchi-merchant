import { useCountdown } from "../../hooks/useCountDown";
import { TimeFormatFactory } from "../Factory/time/TimeFormatFactory";


interface ClockProps {
  targetDate: number;
}

interface CoundownProps {
  targetDate: number;
}

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: CoundownProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <TimeFormatFactory
        minutes={minutes}
        seconds={seconds}
        isDanger={minutes < 3}
      />
    );
  }
};
const CountDownClock = ({ targetDate }: ClockProps) => {
  return <CountdownTimer targetDate={targetDate} />;
};

export default CountDownClock;
