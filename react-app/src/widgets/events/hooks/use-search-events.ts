import { useDispatch, useSelector } from "@store/hooks.ts";
import { ChangeEventHandler, useCallback, useState } from "react";
import { clearFoundEvents } from "@store/entities/events/slice.ts";
import { getEventsByKeyword } from "@store/entities/events/thunks.ts";
import { useDebounce } from "@utils/hooks/use-debounce.ts";
import { EventItem } from "@api/entities/events/types.ts";

type ReturnType = {
  data: EventItem[] | null;
  isFetching: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useSearchEvents = (): ReturnType => {
  const searchState = useSelector((state) => state.events);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const data = searchState.foundEvents;
  const isFetching = searchState.isFetching.searchResult === "inProgress";

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handler = useCallback(() => {
    if (!searchValue.length) {
      return dispatch(clearFoundEvents());
    }
    dispatch(getEventsByKeyword(searchValue));
  }, [searchValue]);

  useDebounce(handler, 1000);
  return {
    data,
    isFetching,
    onChange: handleChangeInput,
    value: searchValue,
  };
};
