import React from "react";
import { InputProps } from "./types.ts";

import styles from "./styles.module.scss";

export const Input: React.FC<InputProps> = React.memo((props) => {
  const { startIcon, ...inputProps } = props;
  return (
    <div className={styles.input}>
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      <input {...inputProps} />
    </div>
  );
});
