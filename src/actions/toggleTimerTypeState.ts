import ActionCreatorInterface from "../interfaces/ActionCreatorInterface";

const toggleTimerTypeState : ActionCreatorInterface = () => {
  return {
    type: "TOGGLE_TIMER_TYPE_STATE",
  }
}

export default toggleTimerTypeState;
