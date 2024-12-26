import { createApp } from 'vue'
import './style.css'
import 'animate.css'

import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')
