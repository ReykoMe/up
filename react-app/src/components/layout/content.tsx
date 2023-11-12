import React from "react";
import styles from "./styles.module.scss";

export const LayoutContent: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <main className={styles.content} id="main-content">
      {children}
    </main>
  );
};
