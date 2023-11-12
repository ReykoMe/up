import { useEffect } from "react";

export const useDebounce = (cb: VoidFunction, timeout: number) => {
  useEffect(() => {
    const timerId = setTimeout(cb, timeout);
    return () => {
      clearTimeout(timerId);
    };
  }, [cb, timeout]);
};
