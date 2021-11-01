import { BiMinus, BiPlus } from 'react-icons/bi';
import TimerLengthProps from '../interfaces/TimerLengthInterface';

const TimerLength: React.FC<TimerLengthProps> = (props) => {
  return (
    <div className="flex flex-col">
      <div>
        <span>{props.label}</span>
      </div>
      <div className="length-control flex justify-between">
        <div
          className=""
          onClick={() => props.setTimerLength(60)}
        >
          <BiPlus />
        </div>
        <div>
          <span>{props.timerLength}</span>
        </div>
        <div
          className=""
          onClick={() => props.setTimerLength(-60)}
        >
          <BiMinus />
        </div>
      </div>
    </div>
  );
};

export default TimerLength;
