import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { io } from 'socket.io-client'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	routes,
	history: createWebHistory(),
})

const app = createApp(App)
app.use(router)

const socket = io('http://localhost:3001')
app.provide('socket', socket)

app.mount('#app')
