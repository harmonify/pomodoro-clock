import { GlobalContext } from '../Store';
import { Dispatch, useContext } from 'react';
import StateInterface from '../interfaces/StateInterface';
import ActionInterface from '../interfaces/ActionInterface';

interface useGlobalStateInterface {
  () : [StateInterface, Dispatch<ActionInterface>];
}

const useGlobalState : useGlobalStateInterface = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return [state, dispatch];
};

export default useGlobalState;
