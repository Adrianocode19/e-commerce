import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style/tailwind.css'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.use(VueTheMask)

app.use(createPinia())

app.mount('#app')
