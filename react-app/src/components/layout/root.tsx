import React from "react";
import styles from "./styles.module.scss";

export const LayoutRoot: React.FC<React.PropsWithChildren> = React.memo(
  (props) => {
    return <div className={styles.root}>{props.children}</div>;
  }
);
