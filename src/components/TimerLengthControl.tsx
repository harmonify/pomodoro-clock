interface TimerLengthControlProps {
  timerLength: number;
  setTimerLength: (timerLength: number) => void;
}

const TimerLengthControl: React.FC<TimerLengthControlProps> = () =>{
  return (
    <div className="length-control">
      <div
        id="session-label"
        className="length-control__label"
        onClick={() => props.setTimerLength(props.timerLength + 60)}
      >
        +
      </div>
      <div
        id="session-label"
        className="length-control__label"
        onClick={() => props.setTimerLength(props.timerLength - 60)}
      >
        -
      </div>
    </div>
  );
};

export default TimerLengthControl;
