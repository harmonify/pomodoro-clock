import { MouseEventHandler } from 'react';
import { MinusIcon, PlusIcon } from '../configs/ICONS';
import useGlobalState from '../hooks/useGlobalState';
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

interface TimerLengthInterface {
  id: string;
  label: string;
  localTimerLength: number;
  min: number;
  max: number;
  setTimerLength: ActionCreatorInterface<number>;
}

const TimerLength: React.FC<TimerLengthInterface> = (props) => {
  const [state, dispatch] = useGlobalState();

  const handleDecrement : MouseEventHandler<HTMLButtonElement> = (e) => {
    if ((! state.isTimerRunning) && (props.localTimerLength > props.min)) {
      e.preventDefault();
      dispatch(props.setTimerLength(props.localTimerLength - 1));
    }
  };

  const handleIncrement : MouseEventHandler<HTMLButtonElement> = (e) => {
    if ((! state.isTimerRunning) && (props.localTimerLength < props.max)) {
      e.preventDefault();
      dispatch(props.setTimerLength(props.localTimerLength + 1));
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
          <span id={`${props.id}-length`}>{props.localTimerLength}</span>
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
