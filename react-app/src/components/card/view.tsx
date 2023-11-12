import { EventCardProps } from ".";
import styles from "./styles.module.scss";

export const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className={styles.eventCard} title={props.title}>
      <img src={props.imgSrc} alt="event-card" />
    </div>
  );
};
