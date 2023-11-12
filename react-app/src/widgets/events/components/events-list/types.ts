import { CSSProperties } from "react";
import { EventItem } from "@api/entities/events/types.ts";
import React from "react";
export type EventsListProps = {
  items: EventItem[] | null;
  selectedItemId?: string | null;
  descriptionExpansionSize: CSSProperties["marginBottom"];
  onClickEventCard: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    eventId: string
  ) => void;
};
