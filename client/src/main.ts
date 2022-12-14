import { createApp } from 'vue'
import App from './App.vue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { io } from 'socket.io-client'
import { setupRouter } from './includes/setupRouter'
import { state } from './includes/state'

const routes = setupLayouts(generatedRoutes)
const router = setupRouter(routes)

const app = createApp(App)
app.use(router)

const socket = io()

socket.on('static', (data: any) => {
	console.log('static updated')
	Object.assign(state.static, data)
})

socket.on('dynamic', (data: any) => {
	console.log('dynamic updated')
	Object.assign(state.dynamic, data)
})

app.provide('state', state)
app.provide('socket', socket)

app.mount('#app')
