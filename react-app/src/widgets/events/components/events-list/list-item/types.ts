import { CSSProperties, MouseEventHandler } from "react";
import { EventCardProps } from "@components/card";

export type EventsListItemProps = EventCardProps & {
  onClick: MouseEventHandler<HTMLDivElement>;
  isExpanded?: boolean;
  expandSize?: CSSProperties["marginBottom"];
};
