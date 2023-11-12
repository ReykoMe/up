import React, { useEffect } from "react";
import "./App.scss";
import { EventsPage } from "./pages/events.page";
import { useDispatch } from "@store/hooks.ts";
import {
  getAllEventsByClassificationId,
  getAllGenres,
} from "@store/entities/events/thunks.ts";
import { batch } from "react-redux";
import { ALL_EVENTS_ID } from "@store/entities/events/constants.ts";

const useAppInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(getAllGenres());
      dispatch(getAllEventsByClassificationId(ALL_EVENTS_ID));
    });
  }, []);
};

// Here should be router or some screen controller to switch between app screens
const App: React.FC = () => {
  useAppInit();
  return (
    <>
      <EventsPage />
    </>
  );
};

export default App;
