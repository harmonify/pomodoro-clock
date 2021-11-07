import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateBreakLength : ActionCreatorInterface<number> = (breakLength) => {
  return {
    type: ACTIONS.UPDATE_BREAK_LENGTH,
    payload: {
      breakLength: breakLength
    },
  };
};

export default updateBreakLength;
