import { useState, useEffect, useLayoutEffect as _useLayoutEffect, useCallback } from "react";

const THEME_KEY = "darkMode";

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? _useLayoutEffect : useEffect;

function getInitialMode() {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme !== null) {
        return savedTheme === "true";
    }

    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export function useTheme() {
    const [darkMode, setDarkMode] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setDarkMode(getInitialMode());
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (typeof document !== "undefined") {
            document.body.classList.toggle("dark", darkMode);
        }

        if (typeof localStorage !== "undefined") {
            localStorage.setItem(THEME_KEY, darkMode);
        }
    }, [darkMode]);

    const toggleTheme = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return { darkMode, toggleTheme };
}
