import { LayoutContent, LayoutRoot, LayoutFooter } from "@components/layout";
import { Events } from "@widgets/events";
import { EventsHeader } from "@widgets/events/components/events-header";
import React from "react";

export const EventsPage: React.FC = () => {
  return (
    <LayoutRoot>
      <EventsHeader />
      <LayoutContent>
        <Events />
      </LayoutContent>
      <LayoutFooter />
    </LayoutRoot>
  );
};
