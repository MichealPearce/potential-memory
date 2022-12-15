import { createApp } from 'vue'
import App from './App.vue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { setupRouter } from './includes/setupRouter'
import { socketPlugin } from './plugins/socket'
import { statePlugin } from './plugins/state'
import { setupAPI } from './plugins/api'
import { setupAuth } from './plugins/auth'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)

setupRouter(app, routes)
app.use(statePlugin).use(socketPlugin).use(setupAPI).use(setupAuth)

app.mount('#app')
