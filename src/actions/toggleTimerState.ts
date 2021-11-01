import { TOGGLE_TIMER_STATE } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const toggleTimerState : ActionCreatorInterface = () => {
  return {
    type: TOGGLE_TIMER_STATE,
  };
};

export default toggleTimerState;
