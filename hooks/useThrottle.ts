//https://velog.io/@ansrjsdn/TypeScript%EC%97%90%EC%84%9C-useDebounce-useThrottle-%EB%A7%8C%EB%93%A4%EA%B8%B0
import { useRef } from "react";

function useThrottle<T extends any[]>(
  callback: (...params: T) => void,
  time: number
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...params);
        timer.current = null;
      }, time);
    }
  };
}

export default useThrottle;
