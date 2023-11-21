import { useDispatch, useSelector } from "@store/hooks.ts";
import { useCallback } from "react";
import { setSelectedEventId } from "@store/entities/events/slice.ts";
import { EventItem } from "@api/entities/events/types.ts";

type ReturnType = {
  data: EventItem[];
  isFetching: boolean;
  isEmpty: boolean;
  onSelect: (eventId: string) => void;
};

export const useEvents = (): ReturnType => {
  const { list, foundEvents, isFetching } = useSelector(
    (store) => store.events
  );

  const dispatch = useDispatch();

  const eventsList: ReturnType["data"] = foundEvents || list || [];
  const isEventsListEmpty: ReturnType["isEmpty"] = !eventsList?.length;

  const isShowProgress: ReturnType["isFetching"] =
    isFetching.searchResult === "inProgress" ||
    isFetching.eventsList === "inProgress" ||
    isFetching.genresList === "inProgress";

  const selectEvent: ReturnType["onSelect"] = useCallback((eventId) => {
    dispatch(setSelectedEventId(eventId));
  }, []);

  return {
    data: eventsList,
    isEmpty: isEventsListEmpty,
    onSelect: selectEvent,
    isFetching: isShowProgress,
  };
};
