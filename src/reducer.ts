import ACTIONS from "./configs/ACTIONS";
import { BREAK, SESSION } from "./configs/CONSTANTS";
import { INITIAL_STATE } from "./configs/STATE";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";

interface ReducerInterface {
  (state: StateInterface, action: ActionInterface): StateInterface;
}

const reducer : ReducerInterface = (state, action)  => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TIMER_RUNNING_STATE:
      return {
        ...state,
        isTimerRunning: !state.isTimerRunning,
      };
    case ACTIONS.RESET_TIMER_LENGTH:
      return INITIAL_STATE;
    case ACTIONS.TOGGLE_TIMER_TYPE_STATE:
      return {
        ...state,
        timerType: (state.timerType === SESSION) ? BREAK : SESSION,
      };
    case ACTIONS.UPDATE_TIMER_LENGTH:
      return {
        ...state,
        timerLength: action.payload.timerLength,
      };
    case ACTIONS.UPDATE_BREAK_LENGTH:
      return {
        ...state,
        breakLength: action.payload.breakLength,
      };
    case ACTIONS.UPDATE_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: action.payload.sessionLength,
      };
    default:
      return state;
  }
}

export default reducer;
