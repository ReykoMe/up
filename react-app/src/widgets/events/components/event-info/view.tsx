import React from "react";
import { Icon } from "@components/icon";
import { EVENT_MOCK_DESCRIPTION } from "./constants";
import { EventDetailsProps } from "./types";
import styles from "./styles.module.scss";

export const EventDetails = React.forwardRef<HTMLElement, EventDetailsProps>(
  (props, ref) => {
    return (
      <article className={styles.root} ref={ref}>
        <div className={styles.summary}>
          <h2>{props.title}</h2>
          <div className={styles.location}>
            <p className={styles.location__item}>
              <Icon variant="calendar" light />
              {props.startTime}
            </p>
            <p className={styles.location__item}>
              <Icon variant="building" light />
              {props.location}
            </p>
          </div>
          <p className={styles.description}>{EVENT_MOCK_DESCRIPTION}</p>
          <ang-button
            custom-title-example="ang-button web-component made with angular and re-used in react"
            onClick={props.onClose}
          >
            Close detail
          </ang-button>
        </div>
        <div className={styles.image}>
          <img src={props.imageSrc} alt={props.title} />
          <div className={styles.gradient} />
        </div>
      </article>
    );
  }
);
