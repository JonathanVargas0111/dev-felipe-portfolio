'use client'
import { Provider } from "react-redux";
import store from './store'
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Initialize theme on app load
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const theme = savedTheme || "dark";
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, []);

    return <Provider store={store}>
        {children}
    </Provider>
}

export default Providers