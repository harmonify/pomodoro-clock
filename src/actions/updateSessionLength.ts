import { UPDATE_SESSION_LENGTH } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const updateSessionLength : ActionCreatorInterface<number> = (sessionLength) => {
  return {
    type: UPDATE_SESSION_LENGTH,
    payload: {
      sessionLength: sessionLength
    }
  };
};

export default updateSessionLength;
