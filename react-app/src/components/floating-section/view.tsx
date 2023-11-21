import { FloatingSectionProps } from "./types";
import styles from "./styles.module.scss";
import React from "react";
import clsx from "clsx";
import { useFloatingSectionController } from "@components/floating-section/controller.ts";
import { WithDataTestId } from "@root/src/utils/util-types";

export const FloatingSection: React.FC<
  React.PropsWithChildren<WithDataTestId<FloatingSectionProps>>
> = React.memo((props) => {
  const { rootRef, contentRef, topPosition, tailPosition } =
    useFloatingSectionController(props);

  return (
    <div
      data-testid={props.dataTestId}
      className={clsx(styles.root, { [styles.hidden]: !props.open })}
      ref={rootRef}
      style={{ top: topPosition }}
    >
      <div className={styles.tail} style={{ left: tailPosition }} />
      <div className={styles.content} ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
});
