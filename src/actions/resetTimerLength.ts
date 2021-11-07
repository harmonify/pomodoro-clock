import ACTIONS from '../configs/ACTIONS';
import ActionCreatorInterface from '../interfaces/ActionCreatorInterface';

const resetTimerLength : ActionCreatorInterface = () => {
  return {
    type: ACTIONS.RESET_TIMER_LENGTH,
  }
};

export default resetTimerLength;
