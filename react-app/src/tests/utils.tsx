import React from "react";
import { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "@store/types";
import events from "@store/entities/events/slice";
import { initialState as eventsInitialState } from "@store/entities/events/constants";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: ToolkitStore<RootState>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { events: eventsInitialState },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { events }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
