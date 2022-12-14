import dayjs from 'dayjs'
import { Socket } from 'socket.io-client'
import { inject } from 'vue'
import { ClientState, MiddlewareHandler } from '../types'

export const datejs = dayjs

export function useSocket(): Socket {
	return inject('socket') as any
}

export function useState(): ClientState {
	return inject('state') as any
}

export function formatBytes(bytes: number, decimals = 2) {
	if (!+bytes) return '0 Bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function defineMiddleware(
	handler: MiddlewareHandler,
): MiddlewareHandler {
	return handler
}
