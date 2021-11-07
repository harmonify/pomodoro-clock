import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateSessionLength : ActionCreatorInterface<number> = (sessionLength) => {
  return {
    type: ACTIONS.UPDATE_SESSION_LENGTH,
    payload: {
      sessionLength: sessionLength
    }
  };
};

export default updateSessionLength;
