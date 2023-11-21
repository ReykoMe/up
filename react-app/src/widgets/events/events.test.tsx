import { act, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../tests/utils";
import { Events } from "./view";
import { initialState } from "@store/entities/events/constants";
import { EventState } from "@store/entities/events/types";
import { TestIdEvents } from "./constants";
import { mockEventItem } from "../../tests/mocks/events";
import * as UseEvents from "./hooks/use-events";
import * as UseEventDetails from "./hooks/use-event-details";
import { vi } from "vitest";

for (const name of ["eventsList", "genresList", "searchResult"]) {
  test(`Show full screen preloader when ${name} is 'inProgress`, async () => {
    const events: EventState = {
      ...initialState,
      isFetching: {
        ...initialState.isFetching,

        [name]: "inProgress",
      },
    };
    const screen = renderWithProviders(<Events />, {
      preloadedState: { events },
    });

    expect(
      screen.queryByTestId(TestIdEvents.fullPagePreloader)
    ).toBeInTheDocument();
  });
}

describe("Events list", () => {
  const list = [
    { ...mockEventItem, id: "1" },
    { ...mockEventItem, id: "2" },
    { ...mockEventItem, id: "3" },
  ];
  const events: EventState = {
    ...initialState,
    list,
  };

  const useEventsOnSelectMock = vi.fn((id: string) => id);
  const useEventsMockDefault: ReturnType<typeof UseEvents.useEvents> = {
    data: events.list!,
    onSelect: useEventsOnSelectMock,
    isEmpty: false,
    isFetching: false,
  };

  const useEventDetailsOpenMock = vi.fn((e) => e.target);

  const useEventDetailsMockDefault: ReturnType<
    typeof UseEventDetails.useEventDetails
  > = {
    anchorEl: document.createElement("div"),
    isOpen: false,
    selectedId: "1",
    open: useEventDetailsOpenMock,
    onClose: vi.fn(),
    onChangeHeight: vi.fn(),
    expansionHeight: "100px",
    height: 100,
    details: {
      imageSrc: "",
      location: "",
      startTime: "",
      title: "title",
      description: "",
    },
  };

  test("Events widget renders all items from store", () => {
    const screen = renderWithProviders(<Events />, {
      preloadedState: { events },
    });
    const items = screen.queryAllByTestId(TestIdEvents.eventItem);
    expect(items.length).toBe(events.list?.length);
  });

  test("Click item should call 'useEventDetails.open' with 'e.currentTarget' and 'useEvents.onSelect' with eventItem.id ", async () => {
    vi.spyOn(UseEvents, "useEvents").mockImplementation(
      () => useEventsMockDefault
    );

    vi.spyOn(UseEventDetails, "useEventDetails").mockImplementation(
      () => useEventDetailsMockDefault
    );
    const screen = renderWithProviders(<Events />, {
      preloadedState: { events },
    });

    const item = screen.queryAllByTestId(TestIdEvents.eventItem)[0];

    await act(async () => {
      fireEvent(
        item,
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );
    });

    expect(useEventsOnSelectMock).toReturnWith("1");
    expect(useEventDetailsOpenMock).toReturnWith(item);
  });

  test("If useEventDetails.isOpen === true and useEventDetails.anchorEl === e.currentTarget, then EventDetails should be rendered", () => {
    const anchorEl = document.createElement("div");
    anchorEl.style.height = "100px";

    vi.spyOn(UseEventDetails, "useEventDetails").mockImplementation(() => ({
      ...useEventDetailsMockDefault,
      isOpen: true,
    }));

    const screen = renderWithProviders(<Events />, {
      preloadedState: { events },
    });

    const description = screen.queryByTestId(TestIdEvents.eventInfo);
    const floatingSection = screen.queryByTestId(
      TestIdEvents.eventInfoFloatingSection
    );

    expect(description).toBeInTheDocument();
    expect(floatingSection).satisfies(
      (el: HTMLElement) => el?.contains(description!)
    );
  });
});
