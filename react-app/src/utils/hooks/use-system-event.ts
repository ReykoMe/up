import { useCallback, useEffect } from "react";

export type CustomEventsNames = "search.clear-input";

export type UseSystemEventReturnType = {
  invoke: <T = unknown>(
    eventName: CustomEventsNames,
    payload?: { data: T }
  ) => void;
};

export const useSystemEvent = () => {
  const invoke: UseSystemEventReturnType["invoke"] = useCallback(
    (eventName, payload) => {
      const event = new CustomEvent(eventName, { detail: { payload } });
      document.dispatchEvent(event);
    },
    []
  );

  return { invoke };
};

export const useSystemEventSubscription = (
  eventName: CustomEventsNames,
  callback: VoidFunction
) => {
  useEffect(() => {
    document.addEventListener(eventName, callback);
    return () => document.removeEventListener(eventName, callback);
  }, [callback]);
};
