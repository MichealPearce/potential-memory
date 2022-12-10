import fastify from 'fastify'
import { registerDatabase } from 'server/database'
import path from 'path'
import fastifyStatic from '@fastify/static'
import { registerSockets } from 'server/sockets'

const app = fastify()

async function registerPlugins() {
	await app.register(registerDatabase, {
		type: 'better-sqlite3',
		database: path.resolve(__BIN_PATH__, 'database.sqlite'),
	})

	await app.register(registerSockets)
}

async function registerClient() {
	const clientFolderPath = path.resolve(__APP_PATH__, 'dist/client')

	await app.register(fastifyStatic, {
		root: clientFolderPath,
		wildcard: false,
	})

	app.get('/*', (_request, reply) => {
		reply.sendFile('index.html')
	})
}

async function start() {
	await registerPlugins()
	await registerClient()

	const serverURL = new URL(import.meta.env.SERVER_URL)
	const url = await app.listen({
		host: serverURL.hostname,
		port: Number(serverURL.port),
	})

	console.log(`Server listening at ${url}`)
}

start()
