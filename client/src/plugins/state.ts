import { App, reactive } from 'vue'
import { ClientState } from '../types'

declare module 'vue' {
	interface App {
		state: ClientState
	}
}

export function statePlugin(app: App) {
	const state = reactive({
		static: {},
		dynamic: {},
	}) as ClientState

	app.state = state
	app.provide('state', state)
}
