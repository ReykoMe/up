import { DefaultState } from "../../types";
import { EventDetails, EventItem } from "@api/entities/events/types.ts";
import { ClassificationItem } from "@api/entities/classifications/types.ts";

type State = {
  selectedEventId: string | null;
  eventDetails: EventDetails | null;
  list: EventItem[] | null;
  genres: ClassificationItem[];
  foundEvents: EventItem[] | null;
  searchValue: string; //FIXME
  selectedGenre: string;
};

export type EventState = DefaultState<
  "eventsList" | "genresList" | "searchResult" | "eventDescription",
  "isShowAllGenres",
  State
>;
