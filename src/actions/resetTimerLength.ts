import { RESET_TIMER_LENGTH } from '../configs/ACTIONS';
import ActionCreatorInterface from '../interfaces/ActionCreatorInterface';

const resetTimerLength : ActionCreatorInterface = () => {
  return {
    type: RESET_TIMER_LENGTH,
  }
};

export default resetTimerLength;
