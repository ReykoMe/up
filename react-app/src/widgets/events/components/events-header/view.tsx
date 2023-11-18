import { Icon } from "@components/icon";
import { Input } from "@components/input";
import { LayoutHeader } from "@components/layout/header";
import React from "react";
import { GenresMenu } from "./components/genres-menu";
import styles from "./styles.module.scss";
import { useSearchEvents } from "@widgets/events/hooks/use-search-events.ts";

// moved from props for prevent extra re-renders of input
const IconComponent = <Icon variant="search" />;

export const EventsHeader: React.FC = () => {
  const search = useSearchEvents();

  return (
    <LayoutHeader>
      <div className={styles.titleBar}>
        <h1>Music events</h1>
        <div className={styles.searchContainer}>
          <Input
            disabled={search.isFetching}
            value={search.value}
            onChange={search.onChange}
            placeholder="Search for events"
            startIcon={IconComponent}
          />
        </div>
      </div>
      <GenresMenu />
    </LayoutHeader>
  );
};
