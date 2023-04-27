<script setup lang="ts">
import { appDataDir, join } from '@tauri-apps/api/path'
import { createDir, exists } from '@tauri-apps/api/fs'
import { convertFileSrc } from '@tauri-apps/api/tauri';

 const wrapperRef = ref<HTMLDivElement>()
const loadPlugin = async () => {
  const iframe = document.createElement('iframe')
  const pluginDir = await join(await appDataDir(), "plugins")
  if (!await exists(pluginDir)) {
    await createDir(pluginDir)
  }
  const index = await join(pluginDir, "dist/index.html")
  if (!await exists(index)) {
    alert(`please run [pnpm build] and [copy -r ./dist to ${pluginDir}/]`)
    return
  }
  iframe.style.border = '1px solid red';
  iframe.src=convertFileSrc(index)
  wrapperRef.value?.appendChild(iframe)
}
</script>

<template>
  <div>
  <button @click="loadPlugin">click to load plugin</button>
  <div ref="wrapperRef"></div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
