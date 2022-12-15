import { defineMiddleware } from '../includes/functions'

export const authed = defineMiddleware((to, from, app) => {
	if (!to.fullPath.startsWith('/login') && !app.auth.current) return '/login'
})
