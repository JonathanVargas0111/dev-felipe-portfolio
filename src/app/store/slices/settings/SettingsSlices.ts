import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  lang: "es" | "en";
  theme: "light" | "dark";
}

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
  }
  return "dark"; // Default to dark theme
};

const initialState: SettingsState = {
  lang: "es",
  theme: getInitialTheme(),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<"es" | "en">) => {
      state.lang = action.payload;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
        document.documentElement.classList.toggle("dark", action.payload === "dark");
      }
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
    },
  },
});

export const { setLang, setTheme, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;