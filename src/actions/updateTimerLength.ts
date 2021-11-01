import { UPDATE_TIMER_LENGTH } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateTimerLength : ActionCreatorInterface<number> = (length) => {
  return {
    type: UPDATE_TIMER_LENGTH,
    payload: {
      timerLength: length,
    },
  };
};

export default updateTimerLength;
