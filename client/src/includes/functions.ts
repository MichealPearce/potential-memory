import dayjs from 'dayjs'
import { Socket } from 'socket.io-client'
import { inject } from 'vue'
import { ClientState } from '../types'

export const datejs = dayjs

export function useSocket(): Socket {
	return inject('socket') as any
}

export function useState(): ClientState {
	return inject('state') as any
}
