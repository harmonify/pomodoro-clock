import toggleTimerState from "../actions/toggleTimerState";
import resetTimerLength from "../actions/resetTimerLength";
import useGlobalState from "../hooks/useGlobalState";
import { PauseIcon, PlayIcon, ResetIcon } from "../configs/ICONS";

const TimerControl: React.FC = () => {
  const [state, dispatch] = useGlobalState();

  const handleTimerToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleTimerState());
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetTimerLength());
  };

  return (
    <div className="timer-control text-2xl">
      <button
        id="start_stop"
        className="timer-control-button ring-hf"
        onClick={handleTimerToggle}
      >
        {state.isTimerRunning
          ? PauseIcon
          : PlayIcon}
      </button>
      <button
        id="reset"
        className="timer-control-button ring-hf"
        onClick={handleReset}
      >
        {ResetIcon}
      </button>
    </div>
  );
};

export default TimerControl;
