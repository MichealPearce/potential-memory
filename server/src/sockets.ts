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
		si.getDynamicData(undefined, undefined, data => io.emit('dynamic', data))
		setTimeout(emitDynamic, 1000)
	}

	io.on('connection', socket => {
		console.log('a user connected')

		si.getStaticData(data => socket.emit('static', data))

		socket.on('fsSize', si.fsSize)
		socket.on('currentLoad', si.currentLoad)
		socket.on('cpuTemperature', si.cpuTemperature)

		socket.on('disconnect', () => {
			console.log('user disconnected')
		})
	})

	instance.decorate('io', io)
	emitDynamic()
})
