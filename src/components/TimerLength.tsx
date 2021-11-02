import { MouseEventHandler } from 'react';
import { MinusIcon, PlusIcon } from '../configs/ICONS';
import useGlobalState from '../hooks/useGlobalState';
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

interface TimerLengthInterface {
  id: string;
  label: string;
  timerLength: number;
  setTimerLength: ActionCreatorInterface<number>;
}

const TimerLength: React.FC<TimerLengthInterface> = (props) => {
  const [state, dispatch] = useGlobalState();

  const handleDecrement : MouseEventHandler<HTMLButtonElement> = (e) => {
    if (! state.isTimerRunning) {
      e.preventDefault();
      dispatch(props.setTimerLength(-1));
    }
  };

  const handleIncrement : MouseEventHandler<HTMLButtonElement> = (e) => {
    if (! state.isTimerRunning) {
      e.preventDefault();
      dispatch(props.setTimerLength(1));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <h2 id={`${props.id}-label`}>{props.label}</h2>
      <div className="md:w-9/12 flex justify-between items-center space-x-2">
        <button
          id={`${props.id}-decrement`}
          className="ring-hf"
          onClick={handleDecrement}
        >
          {MinusIcon}
        </button>
        <div>
          <span id={`${props.id}-length`}>{props.timerLength}</span>
        </div>
        <button
          id={`${props.id}-increment`}
          className="ring-hf"
          onClick={handleIncrement}
        >
          {PlusIcon}
        </button>
      </div>
    </div>
  );
};

export default TimerLength;
