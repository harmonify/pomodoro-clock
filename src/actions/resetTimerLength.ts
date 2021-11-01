import { RESET_TIMER_LENGTH } from '../config/ACTIONS';

const resetTimerLength = () => {
  return {
    type: RESET_TIMER_LENGTH,
  }
};

export default resetTimerLength;
