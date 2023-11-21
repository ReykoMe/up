import { EmptyPage } from "@widgets/empty-page";
import styles from "./styles.module.scss";
import React, { useLayoutEffect, useRef } from "react";
import { CircleProgress } from "@components/circle-progress";
import { WithDataTestId } from "@root/src/utils/util-types";

export const FullPagePreloader: React.FC<WithDataTestId> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = rootRef?.current?.parentElement;
    if (parent) {
      parent.scrollTo({ top: 0 });
      parent.style.overflow = "hidden";
      return () => {
        parent.style.overflowY = "auto";
      };
    }
  }, [rootRef.current]);

  return (
    <div className={styles.root} ref={rootRef} data-testid={props.dataTestId}>
      <EmptyPage>
        <CircleProgress />
      </EmptyPage>
    </div>
  );
};
