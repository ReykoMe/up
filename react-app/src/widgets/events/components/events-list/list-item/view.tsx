import { EventsListItemProps } from "./types";
import { EventCard } from "@components/card";
import styles from "./styles.module.scss";
import { WithDataTestId } from "@root/src/utils/util-types";

export const EventsListItem: React.FC<WithDataTestId<EventsListItemProps>> = (
  props
) => {
  const marginBottom = props.isExpanded ? props.expandSize : "auto";

  return (
    <div
      className={styles.root}
      data-testid={props.dataTestId}
      style={{
        marginBottom,
      }}
      onClick={props.onClick}
    >
      <EventCard title={props.title} imgSrc={props.imgSrc} />
    </div>
  );
};
