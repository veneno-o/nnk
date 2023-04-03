import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

import VideoBackground from 'vue-responsive-video-background-player'
import { Plugin } from 'vue-responsive-video-background-player'

const app = createApp(App)
app.component('video-background', VideoBackground);
app.use(Plugin)
app.use(ElementPlus)
app.mount('#app')
