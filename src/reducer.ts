import ACTIONS from "./configs/ACTIONS";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";

const reducer = (state : StateInterface, action : ActionInterface) : StateInterface => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TIMER_STATE:
    case ACTIONS.RESET_TIMER_LENGTH:
    case ACTIONS.UPDATE_BREAK_LENGTH:
    case ACTIONS.UPDATE_SESSION_LENGTH:
    case ACTIONS.UPDATE_TIMER_LENGTH:
    default:
      return state;
  }
}

export default reducer;
