import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settings/SettingsSlices";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export default store; 
