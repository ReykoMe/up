import React from "react";
import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutRoot,
} from "@components/layout";

export const MainLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <LayoutRoot>
      <LayoutHeader />
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter />
    </LayoutRoot>
  );
};
