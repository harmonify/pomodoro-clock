import ACTIONS from "../configs/ACTIONS";
import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const toggleTimerTypeState : ActionCreatorInterface = () => {
  return {
    type: ACTIONS.TOGGLE_TIMER_TYPE_STATE,
  }
}

export default toggleTimerTypeState;
