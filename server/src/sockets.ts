import { FastifyInstance } from 'fastify'
import { definePlugin } from 'server/includes/functions'
import { Server } from 'socket.io'
import si from 'systeminformation'

declare module 'fastify' {
	interface FastifyInstance {
		io: Server
	}
}

export const registerSockets = definePlugin((instance: FastifyInstance) => {
	console.log('registering sockets')

	const io = new Server(instance.server, {
		cors: {
			origin: [import.meta.env.CLIENT_URL],
		},
	})

	function emitDynamic() {
		si.getDynamicData(undefined, undefined, data => {
			io.volatile.emit('dynamic', data)
			emitDynamic()
		})
	}

	io.on('connection', socket => {
		console.log('a user connected')

		si.getStaticData(data => socket.emit('static', data))

		socket.on('disconnect', () => {
			console.log('user disconnected')
		})
	})

	instance.decorate('io', io)
	emitDynamic()
})