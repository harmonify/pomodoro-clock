import { UPDATE_BREAK_LENGTH } from "../configs/ACTIONS";

const updateBreakLength = (breakLength: number) => {
  return {
    type: UPDATE_BREAK_LENGTH,
    payload: {
      breakLength: breakLength
    },
  };
};

export default updateBreakLength;
