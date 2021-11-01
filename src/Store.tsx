import React, { createContext, useReducer } from "react";
import ActionInterface from "./interfaces/ActionInterface";
import StateInterface from "./interfaces/StateInterface";
import reducer from "./reducer";

const initialState : StateInterface = {
  breakLength: 5,
  sessionLength: 25,
  isTimerRunning: false,
  timerType: "session",
  timerTime: 1500,
};

const GlobalContext = createContext<StateInterface | (StateInterface | React.Dispatch<ActionInterface>)[]>(initialState);

interface StoreProps {
  children: React.ReactNode;
}
const Store = (props : StoreProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
export { GlobalContext };
