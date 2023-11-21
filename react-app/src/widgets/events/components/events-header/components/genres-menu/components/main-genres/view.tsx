import styles from "./styles.module.scss";
import React, { useCallback } from "react";

import { MainGenresProps } from "./types";
import { ALL_GENRES_ID } from "@store/entities/events/constants.ts";
import { Link } from "@components/link";

export const MainGenres: React.FC<MainGenresProps> = React.memo((props) => {
  const handleClickLink = useCallback(
    (genreId: string) => () => {
      !props.isLinksDisabled && props.onClickLink(genreId);
    },
    [props.isLinksDisabled]
  );

  const handleClickMore = useCallback(() => {
    !props.isLinksDisabled && props.onClickMore();
  }, [props.isLinksDisabled]);

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
});
