import { JSX as ReactJSX } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["ang-button"]: ReactJSX.IntrinsicElements["button"] & {
        "custom-title-example"?: string;
      };
    }
  }
}
