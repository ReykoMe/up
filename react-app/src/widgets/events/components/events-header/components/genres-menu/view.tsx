import React from "react";
import { MainGenres } from "./components/main-genres";
import { AllGenres } from "./components/all-genres";
import styles from "./styles.module.scss";
import { useClassifications } from "@widgets/events/hooks/use-classifications.ts";

export const GenresMenu: React.FC = () => {
  const classifications = useClassifications();
  return (
    <nav className={styles.root}>
      {classifications.isShowAll ? (
        <AllGenres
          items={classifications.data.all}
          onClickClose={classifications.closeAll}
          onClickLink={classifications.selectItem}
          activeLinkId={classifications.activeId}
        />
      ) : (
        <MainGenres
          items={classifications.data.main}
          onClickMore={classifications.openAll}
          onClickLink={classifications.selectItem}
          activeLinkId={classifications.activeId}
          isLinksDisabled={classifications.isLocked}
        />
      )}
    </nav>
  );
};
