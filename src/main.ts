import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import 'virtual:windi.css'
import '@/mock/index'
import { useREM } from '@/util/flex'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import '@/styles/index.scss'
const app = createApp(App)
// app.use(ElementPlus)
app.use(useREM)
app.use(ArcoVue)
app.use(createPinia())
app.use(router)
app.mount('#app')
