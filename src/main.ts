import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入vue-router核心插件并安装
import router from '@/router/index'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入全局的头部组件
import Header from '@/components/hander.vue'
// 引入animate
import 'animate.css/animate.min.css'

const app = createApp(App);

app.component("Header",Header)



app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


app.mount('#app')
