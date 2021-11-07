import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateTimerLength : ActionCreatorInterface<number> = (length) => {
  return {
    type: ACTIONS.UPDATE_TIMER_LENGTH,
    payload: {
      timerLength: length,
    },
  };
};

export default updateTimerLength;
