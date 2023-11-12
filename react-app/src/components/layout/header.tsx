import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const LayoutHeader: React.FC<React.PropsWithChildren> = React.memo(
  (props) => (
    <header className={clsx("bg-primary", styles.header)}>
      {props.children || "Some default header content"}
    </header>
  )
);
