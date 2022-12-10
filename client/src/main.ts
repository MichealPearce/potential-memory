import { createApp, reactive } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { io } from 'socket.io-client'
import { ClientState } from './types'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	routes,
	history: createWebHistory(),
})

const app = createApp(App)
app.use(router)

const state = reactive({
	static: {},
	dynamic: {},
}) as ClientState

const socket = io('http://localhost:3001')

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
