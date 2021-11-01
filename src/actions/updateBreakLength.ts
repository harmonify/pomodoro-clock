import { UPDATE_BREAK_LENGTH } from "../config/ACTIONS";

const updateBreakLength = (breakLength: number) => {
  return {
    type: UPDATE_BREAK_LENGTH,
    payload: {
      breakLength: breakLength
    },
  };
};

export default updateBreakLength;
