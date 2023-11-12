import { JSX } from "react";

export type LinkProps = JSX.IntrinsicElements["a"] & {
  onClick?: VoidFunction;
  disabled?: boolean;
  active?: boolean;
};
