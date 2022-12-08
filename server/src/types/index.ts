import {
	FastifyBaseLogger,
	FastifyInstance,
	FastifyPluginOptions,
	FastifyTypeProvider,
	FastifyTypeProviderDefault,
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerBase,
	RawServerDefault,
} from 'fastify'

export type ServerPlugin<
	Options extends FastifyPluginOptions = Record<never, never>,
	Server extends RawServerBase = RawServerDefault,
	TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
> = (
	instance: FastifyInstance<
		Server,
		RawRequestDefaultExpression<Server>,
		RawReplyDefaultExpression<Server>,
		FastifyBaseLogger,
		TypeProvider
	>,
	opts: Options,
) => Promise<void> | void
