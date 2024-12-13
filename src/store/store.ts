import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import siteReducer from "./slice";

const rootReducer = combineReducers({
  site: siteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
