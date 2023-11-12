import { EventsListItemProps } from "./types";
import { EventCard } from "@components/card";
import styles from "./styles.module.scss";

export const EventsListItem: React.FC<EventsListItemProps> = (props) => {
  const marginBottom = props.isExpanded ? props.expandSize : "auto";

  return (
    <div
      className={styles.root}
      style={{
        marginBottom,
      }}
      onClick={props.onClick}
    >
      <EventCard title={props.title} imgSrc={props.imgSrc} />
    </div>
  );
};
