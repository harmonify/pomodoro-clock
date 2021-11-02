import { TOGGLE_TIMER_RUNNING_STATE } from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const toggleTimerRunningState : ActionCreatorInterface = () => {
  return {
    type: TOGGLE_TIMER_RUNNING_STATE,
  };
};

export default toggleTimerRunningState;
