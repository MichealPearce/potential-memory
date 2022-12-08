import fastify from 'fastify'
import { registerDatabase } from 'server/database'
import path from 'path'

const app = fastify()

async function registerPlugins() {
	await app.register(registerDatabase, {
		type: 'better-sqlite3',
		database: path.resolve(__BIN_PATH__, 'database.sqlite'),
	})
}

async function start() {
	await registerPlugins()

	const serverURL = new URL(import.meta.env.SERVER_URL)
	const url = await app.listen({
		host: serverURL.hostname,
		port: Number(serverURL.port),
	})

	console.log(`Server listening at ${url}`)
}

start()
