import styles from "./styles.module.scss";
import React from "react";

import { MainGenresProps } from "./types";
import { ALL_GENRES_ID } from "@store/entities/events/constants.ts";
import { Link } from "@components/link";

export const MainGenres: React.FC<MainGenresProps> = (props) => {
  const handleClickLink = (genreId: string) => () => {
    !props.isLinksDisabled && props.onClickLink(genreId);
  };

  const handleClickMore = () => {
    !props.isLinksDisabled && props.onClickMore();
  };

  return (
    <div className={styles.linksSection}>
      <Link
        onClick={handleClickLink(ALL_GENRES_ID)}
        disabled={props.isLinksDisabled}
        active={props.activeLinkId === ALL_GENRES_ID}
      >
        All genres
      </Link>
      {props.items.map((el) => (
        <Link
          key={el.id}
          onClick={handleClickLink(el.id)}
          disabled={props.isLinksDisabled}
          active={props.activeLinkId === el.id}
        >
          {el.name}
        </Link>
      ))}
      <Link onClick={handleClickMore} disabled={props.isLinksDisabled}>
        More...
      </Link>
    </div>
  );
};
