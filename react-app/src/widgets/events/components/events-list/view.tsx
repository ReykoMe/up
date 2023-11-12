import clsx from "clsx";
import styles from "./styles.module.scss";
import { EventsListProps } from ".";
import React, { MouseEventHandler } from "react";
import { EventsListItem } from "./list-item";

export const EventsList: React.FC<EventsListProps> = (props) => {
  const handleClickEventCard =
    (eventId: string): MouseEventHandler<HTMLDivElement> =>
    (e) => {
      props.onClickEventCard(e, eventId);
    };

  return (
    <div
      className={clsx("section-content", styles.root, {
        hidden: !props.items?.length,
      })}
    >
      {props.items?.map((el) => (
        <EventsListItem
          key={el.id}
          isExpanded={el.id === props.selectedItemId}
          expandSize={props.descriptionExpansionSize}
          title={el.name}
          imgSrc={el.images[4].url}
          onClick={handleClickEventCard(el.id)}
        />
      ))}
    </div>
  );
};
