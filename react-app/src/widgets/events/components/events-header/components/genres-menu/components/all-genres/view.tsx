import React from "react";
import { AllGenresProps } from "./types";
import { GenreCategoryCard } from "../genre-category-card";
import styles from "./styles.module.scss";

export const AllGenres: React.FC<AllGenresProps> = (props) => (
  <div className={styles.root}>
    <div>
      <button onClick={props.onClickClose}>Close</button>
    </div>
    <div className={styles.categoriesContainer}>
      {props.items.map((el) => (
        <GenreCategoryCard
          key={el.id}
          item={el}
          onItemClick={props.onClickLink}
          activeLinkId={props.activeLinkId}
        />
      ))}
    </div>
  </div>
);
