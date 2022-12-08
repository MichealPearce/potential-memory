import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { ServerPlugin } from 'server/types'

export function definePlugin<
	Options extends FastifyPluginOptions = Record<never, never>,
>(plugin: ServerPlugin<Options>): ServerPlugin<Options> {
	return function register(instance: FastifyInstance, opts: any, done: any) {
		try {
			const result = plugin(instance, opts)

			if (result instanceof Promise) return result
			return done()
		} catch (error) {
			return done(error)
		}
	} as ServerPlugin<Options>
}
