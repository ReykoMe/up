import { EmptyPage } from "@widgets/empty-page";
import styles from "./styles.module.scss";
import React, { useLayoutEffect, useRef } from "react";
import { CircleProgress } from "@components/circle-progress";

export const FullPagePreloader: React.FC = () => {
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
    <div className={styles.root} ref={rootRef}>
      <EmptyPage>
        <CircleProgress />
      </EmptyPage>
    </div>
  );
};
