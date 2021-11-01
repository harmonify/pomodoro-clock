import { UPDATE_TIMER_LENGTH } from "../configs/ACTIONS";

const updateTimerLength = (length: number) => {
  return {
    type: UPDATE_TIMER_LENGTH,
    payload: {
      timerLength: length,
    },
  };
};

export default updateTimerLength;
