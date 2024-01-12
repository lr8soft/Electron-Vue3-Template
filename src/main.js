import { createApp } from 'vue'
import App from './App.vue'

// element-ui-plus相关
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(ElementPlus,  {locale: zhCn})
app.mount('#app')
