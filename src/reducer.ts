import ACTIONS from "./configs/ACTIONS";
import { INITIAL_STATE } from "./configs/STATE";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";

const reducer = (state : StateInterface, action : ActionInterface) : any => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TIMER_STATE:
      return {
        ...state,
        isTimerRunning: !state.isTimerRunning,
      };
    case ACTIONS.RESET_TIMER_LENGTH:
      return INITIAL_STATE;
    case ACTIONS.UPDATE_TIMER_LENGTH:
      return {
        ...state,
        timerLength: state.timerLength + action.payload.timerLength,
      };
    case ACTIONS.UPDATE_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength + action.payload.breakLength,
      };
    case ACTIONS.UPDATE_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength + action.payload.sessionLength,
      };
    default:
      return state;
  }
}

export default reducer;
