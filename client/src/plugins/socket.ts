import { io } from 'socket.io-client'
import { App } from 'vue'

export function socketPlugin(app: App) {
	const socket = io()
	const state = app.state

	socket.on('static', (data: any) => {
		console.log('static updated')
		Object.assign(state.static, data)
	})

	socket.on('dynamic', (data: any) => {
		console.log('dynamic updated')
		Object.assign(state.dynamic, data)
	})

	app.provide('socket', socket)
}
