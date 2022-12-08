import { definePlugin } from 'server/includes/functions'
import { DataSource } from 'typeorm'

export const registerDatabase = definePlugin<{
	type: 'better-sqlite3'
	database: string
}>(async function (instance, options) {
	const source = new DataSource({
		type: options.type,
		database: options.database,
	})

	console.log('Initializing database...')
	await source.initialize()
	console.log('Database initialized')

	instance.decorate('database', source)
})
