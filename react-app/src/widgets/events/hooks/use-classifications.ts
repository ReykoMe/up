import { useDispatch, useSelector } from "@store/hooks.ts";
import { ClassificationItem } from "@api/entities/classifications/types.ts";
import { useCallback, useMemo } from "react";
import {
  clearEventDetails,
  closeShowAllGenres,
  toggleShowAllGenres,
} from "@store/entities/events/slice.ts";
import { batch } from "react-redux";
import { getAllEventsByClassificationId } from "@store/entities/events/thunks.ts";
import { useSystemEvent } from "@utils/hooks/use-system-event";

type ReturnType = {
  isLocked: boolean;
  isShowAll: boolean;
  activeId: string;
  data: {
    main: ClassificationItem[];
    all: ClassificationItem[];
  };
  openAll: VoidFunction;
  closeAll: VoidFunction;
  selectItem: (classificationId: string) => void;
};

export const useClassifications = (): ReturnType => {
  const searchState = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const systemEvent = useSystemEvent();
  const { isFetching } = searchState;

  const isMenuLocked: ReturnType["isLocked"] =
    isFetching.searchResult === "inProgress" ||
    isFetching.eventsList === "inProgress" ||
    isFetching.genresList === "inProgress";

  const allClassifications: ReturnType["data"]["all"] = searchState.genres;
  const activeId: ReturnType["activeId"] = searchState.selectedGenre;

  const classificationsMenu: ReturnType["data"]["main"] = useMemo(
    () => allClassifications.slice(0, 4),
    [allClassifications]
  );

  const openAll: ReturnType["openAll"] = useCallback(() => {
    dispatch(toggleShowAllGenres());
  }, []);

  const handleSelectItem: ReturnType["selectItem"] = useCallback(
    (classificationId: string) => {
      systemEvent.invoke("search.clear-input");
      if (classificationId === searchState.selectedGenre) return;
      batch(() => {
        dispatch(closeShowAllGenres());
        dispatch(clearEventDetails());
        dispatch(getAllEventsByClassificationId(classificationId));
      });
    },
    [searchState.selectedGenre]
  );

  return {
    isLocked: isMenuLocked,
    data: { main: classificationsMenu, all: allClassifications },
    isShowAll: searchState.ui.isShowAllGenres,
    selectItem: handleSelectItem,
    openAll: openAll,
    closeAll: openAll,
    activeId,
  };
};
