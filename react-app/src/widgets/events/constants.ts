import { createTestIdSelector } from "@utils/create-test-id";
const createTestId = createTestIdSelector("events");

export const TestIdEvents = {
  root: createTestId("root"),
  fullPagePreloader: createTestId("full-page-preloder"),
  eventItem: createTestId("event-item"),
  eventInfo: createTestId("event-info"),
  eventInfoFloatingSection: createTestId("event-info-floating-section"),
};
