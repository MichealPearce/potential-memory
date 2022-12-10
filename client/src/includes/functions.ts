import { Socket } from 'socket.io-client'
import { inject } from 'vue'

export function useSocket(): Socket {
	return inject('socket') as any
}
