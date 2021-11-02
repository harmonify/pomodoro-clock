import { createContext, Dispatch, useEffect, useReducer, useRef } from "react";
import HOCInterface from "./interfaces/HOCInterface";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";
import reducer from "./reducer";
import { INITIAL_STATE } from "./configs/STATE";

interface ContextInterface {
  state: StateInterface;
  dispatch: Dispatch<ActionInterface>;
}

const GlobalContext = createContext({} as ContextInterface);

const initializeState = () => {
  const state : string | null = sessionStorage.getItem('state');
  if (state) {
    return JSON.parse(state);
  }
  return INITIAL_STATE;
};

const Store : HOCInterface = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState());
  const initialRenderGlobalState = useRef(true);

  /*
   * @description: populate sessionStorage data from globalState if it exists
   */
  useEffect(() => {
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
export { GlobalContext };
