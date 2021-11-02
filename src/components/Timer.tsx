import { useEffect, useRef } from "react";
import toggleTimerTypeState from "../actions/toggleTimerTypeState";
import updateTimerLength from "../actions/updateTimerLength";
import updateBreakLength from "../actions/updateBreakLength";
import updateSessionLength from "../actions/updateSessionLength";
import { BEEP_SOUND, BREAK, SESSION, SIXTY_SECONDS } from "../configs/CONSTANTS";
import { MAX_BREAK_LENGTH, MAX_SESSION_LENGTH, MIN_BREAK_LENGTH, MIN_SESSION_LENGTH } from "../configs/STATE";
import useGlobalState from "../hooks/useGlobalState";
import useInterval from "../hooks/useInterval";
import { toClock } from "../utilities/toClock";
import TimerControl from "./TimerControl";
import TimerLength from "./TimerLength";

const Timer : React.FC = () => {
  const [state, dispatch] = useGlobalState();
  const audioRef = useRef<HTMLAudioElement>(null);

  /* 
   * @description: Watch for changes to the timerType, sessionLength, and breakLength state.
   */
  useEffect(
    () => {
      if (state.timerType === SESSION) {
        dispatch(updateTimerLength(state.sessionLength * SIXTY_SECONDS));
      } else {
        dispatch(updateTimerLength(state.breakLength * SIXTY_SECONDS));
      }
    },
    // eslint-disable-next-line
    [state.timerType, state.sessionLength, state.breakLength]
  );

  /*
   * @description: Count down the timer and plays a beep sound when the timer counts down to zero.
   */
  useInterval(() => {
    if (state.isTimerRunning) {
      dispatch(updateTimerLength(state.timerLength - 1));
      if (state.timerLength === 0) {
        audioRef.current!.currentTime = state.audioCurrentTime;
        audioRef.current!.play();
        dispatch(toggleTimerTypeState());
      }
    }
  }, 1000);

  return (
    <>
      <div className="flex justify-between space-x-8 py-3">
        <TimerLength
          id={SESSION}
          label="Session Length"
          localTimerLength={state.sessionLength}
          setTimerLength={updateSessionLength}
          min={MIN_SESSION_LENGTH}
          max={MAX_SESSION_LENGTH}
        />
        <TimerLength
          id={BREAK}
          label="Break Length"
          localTimerLength={state.breakLength}
          setTimerLength={updateBreakLength}
          min={MIN_BREAK_LENGTH}
          max={MAX_BREAK_LENGTH}
        />
      </div>
      <div className="container space-y-2">
        <div className="container rounded-xl border-8 border-white">
          <h3
            id="timer-label"
            className="text-2xl font-medium capitalize"
          >
            {state.timerType}
          </h3>
          <div className="font-semibold text-7xl mb-3 select-none">
            <span id="time-left">
              {toClock(state.timerLength)}
            </span>
          </div>
        </div>
        <TimerControl
          audioRef={audioRef}   //Hacky way to pass the audioRef to the TimerControl component.
        />
        <audio
          id="beep"
          preload="auto"
          ref={audioRef}
          src={BEEP_SOUND}
        />
      </div>
    </>
  );
}

export default Timer;
