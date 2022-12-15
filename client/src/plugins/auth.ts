import { App, inject, reactive } from 'vue'

declare module 'vue' {
	interface App {
		auth: AuthState
	}
}

export type AuthState = {
	current: null | string
}

export async function setupAuth(app: App) {
	const state: AuthState = reactive({
		current: null,
	})

	app.auth = state
	app.provide('auth', state)
}

export function useAuth() {
	return inject('auth') as AuthState
}
