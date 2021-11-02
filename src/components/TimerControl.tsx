import React from 'react';
import toggleTimerRunningState from "../actions/toggleTimerRunningState";
import resetTimerLength from "../actions/resetTimerLength";
import useGlobalState from "../hooks/useGlobalState";
import { PauseIcon, PlayIcon, ResetIcon } from "./ICONS";

interface TimerControlProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const TimerControl : React.FC<TimerControlProps> = ({audioRef}) => {
  const [state, dispatch] = useGlobalState();

  const handleTimerToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleTimerRunningState());
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    audioRef.current!.pause();
    dispatch(resetTimerLength());
  };

  return (
    <div className="timer-control text-2xl space-x-3">
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
