import React from "react";
import SearchIcon from "./assets/search.svg?react";
import CalendarIcon from "./assets/calendar.svg?react";
import PlaceIcon from "./assets/place.svg?react";

import { IconNames, IconProps } from "./types";
import styles from "./styles.module.scss";
import clsx from "clsx";

const iconsMap: Record<IconNames, React.FC> = {
  search: SearchIcon,
  building: PlaceIcon,
  calendar: CalendarIcon,
};

export const Icon: React.FC<IconProps> = React.memo((props) => {
  const { variant } = props;
  const Component = iconsMap[variant];
  return (
    <span
      className={clsx(styles.icon, {
        [styles["icon-light"]]: props.light,
      })}
    >
      <Component />
    </span>
  );
});
