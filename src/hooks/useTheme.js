import { useState, useEffect, useCallback } from "react";

const THEME_KEY = "darkMode";

export function useTheme() {
    const getInitialMode = () => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme !== null) {
            return savedTheme === "true";
        }
        return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
    };

    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem(THEME_KEY, darkMode);
    }, [darkMode]);

    const toggleTheme = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return { darkMode, toggleTheme };
}
