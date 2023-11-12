import React from "react";
import clsx from "clsx";
import { LinkProps } from "./types.ts";
import styles from "./styles.module.scss";

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = React.memo(
  (props) => {
    const { disabled, active, onClick, ...anchorProps } = props;
    return (
      <a
        className={clsx(styles.root, {
          [styles.disabled]: disabled,
          [styles.active]: active,
        })}
        onClick={onClick}
        {...anchorProps}
      >
        {props.children}
      </a>
    );
  }
);
