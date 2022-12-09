import { inObject, isObject } from '../utils'
import { ConstructError } from './ConstructError'

export const ServerErrorSymbol = Symbol('ServerError')

export function isServerError(thing: unknown): thing is ServerError {
	return isObject(thing) && inObject(thing, [ServerErrorSymbol])
}

export class ServerError extends ConstructError {
	readonly [ServerErrorSymbol] = true

	constructor(public readonly statusCode: number, message: string) {
		super(message)
	}
}
