interface TimerControlProps {
  handleResume: () => void;
  handlePause: () => void;
  handleReset: () => void;
}

const TimerControl: React.FC<TimerControlProps> = (props) => {
  return (
    <div className="timer-control">
      <button className="timer-control__button" onClick={props.handleResume}>Resume</button>
      <button className="timer-control__button" onClick={props.handlePause}>Pause</button>
      <button className="timer-control__button" onClick={props.handleReset}>Reset</button>
    </div>
  );
};

export default TimerControl;
