import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const toggleTimerRunningState : ActionCreatorInterface = () => {
  return {
    type: ACTIONS.TOGGLE_TIMER_RUNNING_STATE,
  };
};

export default toggleTimerRunningState;
