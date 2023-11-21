import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "@store/hooks.ts";
import { EventDetailsProps } from "@widgets/events/components/event-info";
import { normalizeEventDetails } from "@widgets/events/helpers/normalize-event-details.ts";
import { clearEventDetails } from "@store/entities/events/slice.ts";
import { getEventDetailsById } from "@store/entities/events/thunks.ts";

type ReturnType = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  open: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  details: Omit<EventDetailsProps, "onClose">;
  onClose: VoidFunction;
  height: number;
  onChangeHeight: (newHeight: number) => void;
  selectedId: string | null;
  expansionHeight: string;
};

export const useEventDetails = (): ReturnType => {
  const { selectedEventId, eventDetails } = useSelector(
    (store) => store.events
  );

  const [detailsSectionAnchor, setDetailsSectionAnchor] =
    useState<HTMLElement | null>(null);
  const [detailsSectionHeight, setDetailsSectionHeight] = useState<number>(0);

  const dispatch = useDispatch();

  const isOpen = Boolean(selectedEventId);

  const expansionHeight = `calc(${detailsSectionHeight}px + 1.6rem)`;

  const normalizedDetails: EventDetailsProps = useMemo(
    () => normalizeEventDetails(eventDetails),
    [eventDetails]
  );
  const handleClose = useCallback(() => {
    dispatch(clearEventDetails());
  }, []);

  const handleOpen: ReturnType["open"] = (e) => {
    setDetailsSectionAnchor(e.currentTarget);
  };

  const handleChangeHeight: ReturnType["onChangeHeight"] = useCallback(
    (newHeight) => {
      setDetailsSectionHeight(newHeight);
    },
    []
  );

  useEffect(() => {
    if (selectedEventId) {
      dispatch(getEventDetailsById(selectedEventId));
    }
  }, [selectedEventId]);

  return {
    details: normalizedDetails,
    anchorEl: detailsSectionAnchor,
    isOpen,
    selectedId: selectedEventId,
    height: detailsSectionHeight,
    expansionHeight,
    onClose: handleClose,
    open: handleOpen,
    onChangeHeight: handleChangeHeight,
  };
};
