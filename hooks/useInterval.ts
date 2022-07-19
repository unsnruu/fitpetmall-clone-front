import { useEffect, useRef } from "react";

function useInterval(cb: Function, delay: number) {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
