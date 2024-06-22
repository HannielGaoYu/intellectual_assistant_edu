import { createApp } from 'vue'
import {store} from '@/store/index'
import 'normalize.css'

import './assets/css/index.less'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app') 
