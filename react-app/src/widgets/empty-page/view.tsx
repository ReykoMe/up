import React from "react";
import styles from "./styles.module.scss";
import { WithDataTestId } from "@root/src/utils/util-types";

export const EmptyPage: React.FC<React.PropsWithChildren<WithDataTestId>> = (
  props
) => {
  return (
    <div className={styles.root} data-testid={props.dataTestId}>
      {props.children}
    </div>
  );
};
