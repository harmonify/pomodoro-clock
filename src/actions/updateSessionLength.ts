import { UPDATE_SESSION_LENGTH } from "../config/ACTIONS";

const updateSessionLength = (sessionLength: number) => {
  return {
    type: UPDATE_SESSION_LENGTH,
    payload: {
      sessionLength: sessionLength
    }
  };
};

export default updateSessionLength;
