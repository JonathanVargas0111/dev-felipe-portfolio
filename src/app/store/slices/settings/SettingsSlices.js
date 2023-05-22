import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "es",
  theme: "dark",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLang(state, action) {
      state.lang = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});
export const { setLang, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;