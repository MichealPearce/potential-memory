import { App, inject } from 'vue'
import axios, { AxiosInstance } from 'axios'

declare module 'vue' {
	interface App {
		api: AxiosInstance
	}
}

export function setupAPI(app: App) {
	const baseURL = new URL('/api', import.meta.env.CLIENT_URL).href
	const api = axios.create({
		baseURL,
	})

	app.api = api
	app.provide('api', api)
}

export function useAPI() {
	return inject('api') as AxiosInstance
}
