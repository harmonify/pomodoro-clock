import GlobalContext from '../Store';
import { useContext } from 'react';

const useGlobalState = () => {
  const [state, dispatch] = useContext<any>(GlobalContext);

  return [state, dispatch];
};

export default useGlobalState;
