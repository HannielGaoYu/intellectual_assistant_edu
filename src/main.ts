import { createApp } from 'vue'
import {store} from '@/store/index'
import 'normalize.css'

import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)
app.use(store)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(hljsVuePlugin)

app.mount('#app') 
