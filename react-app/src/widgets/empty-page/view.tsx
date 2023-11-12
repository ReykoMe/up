import React from "react";
import styles from "./styles.module.scss";

export const EmptyPage: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.root}>{props.children}</div>;
};
