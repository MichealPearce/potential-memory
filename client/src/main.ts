import { createApp } from 'vue'
import App from './App.vue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { setupRouter } from './includes/setupRouter'
import { socketPlugin } from './plugins/socket'
import { statePlugin } from './plugins/state'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)

setupRouter(app, routes)
app.use(statePlugin).use(socketPlugin)

app.mount('#app')
