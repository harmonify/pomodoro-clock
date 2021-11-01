import useGlobalState from "../hooks/useGlobalState";
import TimerControl from "./TimerControl";

const Timer : React.FC = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
      <h1>Timer</h1>
      <div className="timer">
        <span>{state.timerLength}</span>
      </div>
      <TimerControl

      />
    </div>
  );
}

export default Timer;
