import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { appDataDir, dataDir } from '@tauri-apps/api/path'
import { exists, createDir } from '@tauri-apps/api/fs'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import './assets/main.css'

window.addEventListener("DOMContentLoaded", async () => {
    console.info("DOMContentLoaded")
})

const dir = await appDataDir()
console.log(dir)
exists(dir).then(v => {
    console.log(v)
    if (!v) {
        createDir(dir).catch(e => {
            console.error(e)
        })
    }
}).catch(e => {
    console.error(e)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
