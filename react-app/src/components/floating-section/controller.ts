import React, { useCallback, useEffect, useRef, useState } from "react";
import { FloatingSectionProps } from "@components/floating-section/types.ts";

export const useFloatingSectionController = (
  props: React.PropsWithChildren<FloatingSectionProps>
): {
  tailPosition: number;
  topPosition: number;
  contentRef: React.RefObject<HTMLDivElement>;
  rootRef: React.RefObject<HTMLDivElement>;
} => {
  const [tailPosition, setTailPosition] = useState(0);
  const [topPosition, setTopPosition] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const changeOnScreenPosition = useCallback(() => {
    const rect = props.anchorEl?.getBoundingClientRect();
    const parent = rootRef?.current?.parentElement;
    const scroll = parent?.scrollTop ?? 0;
    props.onChangeHeight(
      contentRef.current?.getBoundingClientRect().height || 0
    );
    if (rect) {
      const { bottom, width, left } = rect;
      setTailPosition(left + width / 2);
      setTopPosition(bottom + scroll - 155); //155 - is the header height for normal resolution
    }
  }, [props.anchorEl, props.children]);

  useEffect(() => {
    changeOnScreenPosition();
    window.addEventListener("resize", changeOnScreenPosition);
    return () => window.removeEventListener("resize", changeOnScreenPosition);
  }, [changeOnScreenPosition]);

  return { tailPosition, topPosition, contentRef, rootRef };
};
