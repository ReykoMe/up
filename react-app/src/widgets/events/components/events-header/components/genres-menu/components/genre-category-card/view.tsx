import React, { useCallback, useMemo, useState } from "react";
import { GenreCategoryCardProps } from "./types";
import { Link } from "@components/link";
import styles from "./styles.module.scss";

export const GenreCategoryCard: React.FC<GenreCategoryCardProps> = (props) => {
  const [showSubgenres, setShowSubgenres] = useState<boolean>(false);
  const subgenres = props.item._embedded.subgenres;
  const subgenresLength = subgenres.length;

  const isCategorySelected = useMemo(() => {
    return subgenres.some((el) => el.id === props.activeLinkId);
  }, [props.activeLinkId]);

  const handleClickCategoryName = useCallback(
    () => setShowSubgenres((prev) => !prev),
    [showSubgenres]
  );

  const handleClickSubgenre = useCallback(
    (genreId: string) => () => {
      props.onItemClick(genreId);
    },
    []
  );

  return (
    <div className={styles.root}>
      <Link onClick={handleClickCategoryName} active={isCategorySelected}>
        <b>
          {props.item.name} ({subgenresLength})
        </b>
      </Link>

      {showSubgenres && (
        <div>
          {subgenres.map((genre, idx) => (
            <span key={genre.id}>
              <Link
                onClick={handleClickSubgenre(genre.id)}
                active={props.activeLinkId === genre.id}
              >
                {genre.name}
              </Link>
              {idx !== subgenresLength - 1 && ", "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
