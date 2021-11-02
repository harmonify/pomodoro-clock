import { MutableRefObject, useEffect, useRef } from 'react';
import MutatingCallback from '../interfaces/MutatingCallbackType';

interface useIntervalInterface {
  (callback : MutatingCallback , delay : number | null) : void;
}

const useInterval : useIntervalInterface = (callback, delay) => {
  const savedCallback : MutableRefObject<MutatingCallback> = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
