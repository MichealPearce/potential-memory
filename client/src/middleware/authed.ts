import { sleep } from 'shared'
import { defineMiddleware } from '../includes/functions'
import { state } from '../includes/state'

export const authed = defineMiddleware((to, from) => {
	console.log('authed', state)
})
