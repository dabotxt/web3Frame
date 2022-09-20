import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import 'src/style/font-family/font.css'
import 'animate.css'

const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
