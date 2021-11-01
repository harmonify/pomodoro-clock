import { createContext, Dispatch, useEffect, useReducer, useRef } from "react";
import HOCInterface from "./interfaces/HOCInterface";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";
import reducer from "./reducer";

interface ContextInterface {
  state: StateInterface;
  dispatch: Dispatch<ActionInterface>;
}

const GlobalContext = createContext({} as ContextInterface);

const initialState : StateInterface = {
  breakLength: 5,
  sessionLength: 25,
  isTimerRunning: false,
  timerType: "session",
  timerLength: 60,
};
initialState.timerLength *= initialState.sessionLength;

const initializeState = () => {
  const state : string | null = sessionStorage.getItem('state');
  if (state) {
    return JSON.parse(state);
  }
  return initialState;
};

const Store : HOCInterface = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState());
  const initialRenderGlobalState = useRef(true);

  useEffect(() => {
    /*
     populate sessionStorage data from globalState if it exists
    */
    if (initialRenderGlobalState.current) {
      initialRenderGlobalState.current = false;
      return;
    }

    sessionStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Store;
export { GlobalContext, initialState };
