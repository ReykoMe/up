import React from "react";
import { FloatingSection } from "@components/floating-section";

import { EventDetails } from "./components/event-info";
import { EventsList } from "./components/events-list";

import styles from "./styles.module.scss";
import { EmptyPage } from "@widgets/empty-page";
import { FullPagePreloader } from "@widgets/full-page-preloader";
import { useEventDetails } from "@widgets/events/hooks/use-event-details.ts";
import { useEvents } from "@widgets/events/hooks/use-events.ts";
import { TestIdEvents } from "./constants";

export const Events: React.FC = () => {
  const events = useEvents();
  const eventInfo = useEventDetails();

  const handleClickEventItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    eventId: string
  ) => {
    events.onSelect(eventId);
    eventInfo.open(e);
  };

  return (
    <main className={styles.root} data-testid={TestIdEvents.root}>
      {events.isFetching && (
        <FullPagePreloader dataTestId={TestIdEvents.fullPagePreloader} />
      )}
      {events.isEmpty && <EmptyPage>Events not found</EmptyPage>}
      <EventsList
        onClickEventCard={handleClickEventItem}
        items={events.data}
        selectedItemId={eventInfo.selectedId}
        descriptionExpansionSize={eventInfo.expansionHeight}
      />
      <FloatingSection
        anchorEl={eventInfo.anchorEl}
        open={eventInfo.isOpen}
        onChangeHeight={eventInfo.onChangeHeight}
        dataTestId={TestIdEvents.eventInfoFloatingSection}
      >
        {eventInfo.isOpen && (
          <EventDetails {...eventInfo.details} onClose={eventInfo.onClose} />
        )}
      </FloatingSection>
    </main>
  );
};
