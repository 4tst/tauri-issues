import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { appDataDir } from '@tauri-apps/api/path'
import { exists, createDir } from '@tauri-apps/api/fs'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import './assets/main.css'

window.addEventListener("DOMContentLoaded", async () => {
    console.info("DOMContentLoaded")
    const dir = await appDataDir()
    if (!await exists(dir)) {
        await createDir(dir)
    } else {
        console.log(dir, 'existed')
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
