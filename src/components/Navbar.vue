<template>
  <nav id="navbar-top" class="navbar px-3 sticky-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img
          src="./../assets/logo.png"
          alt=""
          width="24"
          height="24"
          class="d-inline-block align-text-top"
        />
        VITE VUE TS TEMPLATE
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item dropdown">
          <button class="btn py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="true" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme (dark)">
            <i v-if="activeTheme === 'light'" class="bi bi-sun-fill"></i>
            <i v-if="activeTheme === 'dark'" class="bi bi-moon-stars-fill"></i>
            <i v-if="activeTheme === 'auto'" class="bi bi-circle-half"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" data-bs-popper="static">
            <li>
              <button type="button" @click="chooseTheme('light')" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                <i class="bi bi-sun-fill"></i>
                Light
                <i v-if="activeTheme === 'light'" class="bi bi-check2"></i>
              </button>
            </li>
            <li>
              <button type="button" @click="chooseTheme('dark')" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                <i class="bi bi-moon-stars-fill"></i>
                Dark
                <i v-if="activeTheme === 'dark'" class="bi bi-check2"></i>
              </button>
            </li>
            <li>
              <button type="button" @click="chooseTheme('auto')" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                <i class="bi bi-circle-half"></i>
                Auto
                <i v-if="activeTheme === 'auto'" class="bi bi-check2"></i>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import {useThemeStore } from "../stores/theme";

const activeTheme = ref("");
const themeStore = useThemeStore();

onMounted(async () => {
  setTheme(themeStore.getTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setTheme(newColorScheme);
});
});

const chooseTheme = (theme: string) => {
  setTheme(theme);
  themeStore.setTheme(theme);
}

const setTheme = (theme: string) => {
  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
  activeTheme.value = theme;
}
</script>

<style scoped>

i.bi {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

/* a.nav-link {
  color: var(--color-white-blue);
  border-radius: 0;
}
a.nav-link.active {
  color: var(--color-white-blue);
  border-bottom: 2px solid var(--color-light-blue);
  background-color: var(--color-dark-blue);
}
a.navbar-brand {
  color: var(--color-light-blue);
}
nav#navbar-top {
  background-color: var(--color-dark-blue);
  color: var(--color-white-blue);
} */
</style>
