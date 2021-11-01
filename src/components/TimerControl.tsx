import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import toggleTimerState from "../actions/toggleTimerState";
import resetTimerLength from "../actions/resetTimerLength";
import useGlobalState from "../hooks/useGlobalState";
import TimerInterface from "../interfaces/TimerInterface";

const TimerControl: React.FC<TimerInterface> = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="timer-control">
      <button className="timer-control-button" onClick={dispatch(toggleTimerState)}>
        {state.isTimerRunning
          ? <BsPauseFill />
          : <BsPlayFill />}
      </button>
      <button className="timer-control-button" onClick={dispatch(resetTimerLength)}>
        <GrPowerReset />
      </button>
    </div>
  );
};

export default TimerControl;
