import { EventState } from "./types";

export const ALL_EVENTS_ID = "KZFzniwnSyZfZ7v7nJ";
export const ALL_GENRES_ID = "KZFzniwnSyZfZ7v7nJ";

export const initialState: EventState = {
  ui: {
    isShowAllGenres: false,
  },
  isFetching: {
    eventsList: "success",
    genresList: "success",
    searchResult: "success",
    eventDescription: "success",
  },
  selectedEventId: null,
  eventDetails: null,
  list: null,
  genres: [],
  foundEvents: null,
  selectedGenre: ALL_GENRES_ID,
};
