import { User } from 'server/database/models/User'
import { definePlugin } from 'server/includes/functions'
import { DataSource } from 'typeorm'

declare module 'fastify' {
	interface FastifyInstance {
		database: DataSource
	}
}

export const registerDatabase = definePlugin<{
	type: 'better-sqlite3'
	database: string
}>(async function (instance, options) {
	const source = new DataSource({
		type: options.type,
		database: options.database,
		entities: [User],
		synchronize: true,
	})

	console.log('Initializing database...')
	await source.initialize()
	console.log('Database initialized')

	instance.decorate('database', source)

	if (import.meta.env.DEV) await test()
})

async function test() {
	const user = User.init({
		name: 'test',
	})

	await user.reload()

	console.log(user)
}
