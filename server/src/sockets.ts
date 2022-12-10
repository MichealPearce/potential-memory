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

	io.on('connection', socket => {
		console.log('a user connected')

		socket.on('static', (cb: any) => si.getStaticData(cb))
		socket.on('dynamic', (cb: any) =>
			si.getDynamicData(undefined, undefined, cb),
		)

		socket.on('disconnect', () => {
			console.log('user disconnected')
		})
	})

	instance.decorate('io', io)
})
