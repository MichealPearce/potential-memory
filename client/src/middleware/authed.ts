import { defineMiddleware } from '../includes/functions'

export const authed = defineMiddleware((to, from, app) => {
	console.log('authed', app.state)
})
