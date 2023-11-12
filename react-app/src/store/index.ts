import { configureStore } from "@reduxjs/toolkit";
import events from "./entities/events/slice";

export const store = configureStore({
  reducer: {
    events,
  },
});
