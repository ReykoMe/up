import { store } from "./index";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FetchingInitialValues<T extends PropertyKey> = {
  isFetching: Record<T, "inProgress" | "success" | "error">;
};

export type UiInitialValues<T extends PropertyKey> = {
  ui: Record<T, boolean>;
};

export type DefaultState<
  FetchingKeys extends PropertyKey,
  UiKeys extends PropertyKey,
  StateType,
> = FetchingInitialValues<FetchingKeys> & UiInitialValues<UiKeys> & StateType;
