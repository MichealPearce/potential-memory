import { inObject, isObject } from '../utils'

export const ConstructErrorSymbol = Symbol('ConstructError')

export function isConstructError(thing: unknown): thing is ConstructError {
	return isObject(thing) && inObject(thing, [ConstructErrorSymbol])
}

export class ConstructError extends Error {
	readonly isError = true;
	readonly [ConstructErrorSymbol] = true

	constructor(public readonly message: string) {
		super(message)
	}
}
