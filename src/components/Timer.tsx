interface TimerProps {
  startTime: number;
  endTime: number;
  onFinish: () => void;
}

const Timer : React.FC<TimerProps> = () => {
  return (
    <div>
      <h1>Timer</h1>
      <div className="timer">
        time left
      </div>
    </div>
  );
}

export default Timer;
