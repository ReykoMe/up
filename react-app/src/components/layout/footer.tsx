import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Link } from "@components/link";

export const LayoutFooter: React.FC = React.memo(() => (
  <footer className={clsx(styles.footer)}>
    <Link href="/"> Fitek 2020</Link>
  </footer>
));
