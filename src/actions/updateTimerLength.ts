import { UPDATE_TIMER_LENGTH } from "../config/ACTIONS";

const updateTimerLength = (length: number) => {
  return {
    type: UPDATE_TIMER_LENGTH,
    payload: {
      timerLength: length,
    },
  };
};

export default updateTimerLength;
