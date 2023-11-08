import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore("theme", () => {
    const theme = useStorage("theme", "");

    function setTheme(newTheme: string) {
        theme.value = newTheme;
    }

    function getTheme() {
        return theme.value;
    }

    return { setTheme, getTheme };
});