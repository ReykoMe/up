import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants.ts";
import {
  getAllGenres,
  getAllEventsByClassificationId,
  getEventsByKeyword,
} from "./thunks.ts";
import { getEventDetailsById } from "./thunks";

export const uiSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setSelectedEventId: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.selectedEventId === payload
        ? (state.selectedEventId = null)
        : (state.selectedEventId = payload);
    },
    clearEventDetails: (state) => {
      state.selectedEventId = null;
      state.eventDetails = null;
    },
    toggleShowAllGenres: (state) => {
      state.ui.isShowAllGenres = !state.ui.isShowAllGenres;
    },

    closeShowAllGenres: (state) => {
      state.ui.isShowAllGenres = false;
    },

    clearFoundEvents: (state) => {
      state.selectedEventId = null;
      state.eventDetails = null;
      state.foundEvents = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllEventsByClassificationId.pending, (state) => {
      state.isFetching.eventsList = "inProgress";
    });

    builder.addCase(
      getAllEventsByClassificationId.fulfilled,
      (state, action) => {
        const { payload } = action;
        state.isFetching.eventsList = "success";
        state.selectedGenre = action.payload.classificationId;
        state.list = payload.result.data._embedded?.events || [];
      }
    );
    builder.addCase(getAllEventsByClassificationId.rejected, (state) => {
      state.isFetching.eventsList = "error";
    });

    builder.addCase(getAllGenres.pending, (state) => {
      state.isFetching.genresList = "inProgress";
    });

    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload.data.segment._embedded.genres;
      state.isFetching.genresList = "success";
    });

    builder.addCase(getAllGenres.rejected, (state) => {
      state.isFetching.genresList = "error";
    });

    builder.addCase(getEventDetailsById.pending, (state) => {
      state.isFetching.eventDescription = "inProgress";
    });

    builder.addCase(getEventDetailsById.fulfilled, (state, action) => {
      const { payload } = action;
      state.eventDetails = payload.data;
      state.isFetching.eventDescription = "success";
    });

    builder.addCase(getEventDetailsById.rejected, (state) => {
      state.isFetching.eventDescription = "error";
    });

    builder.addCase(getEventsByKeyword.pending, (state) => {
      state.isFetching.searchResult = "inProgress";
    });

    builder.addCase(getEventsByKeyword.fulfilled, (state, action) => {
      state.foundEvents = action.payload.data._embedded?.events || [];
      state.isFetching.searchResult = "success";
      state.selectedEventId = null;
      state.eventDetails = null;
    });

    builder.addCase(getEventsByKeyword.rejected, (state) => {
      state.isFetching.searchResult = "error";
    });
  },
});

export const {
  clearEventDetails,
  setSelectedEventId,
  toggleShowAllGenres,
  clearFoundEvents,
  closeShowAllGenres,
} = uiSlice.actions;
export default uiSlice.reducer;
