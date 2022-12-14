import { Entries } from '../types'
import { isArray, isObject, notObject } from './is'

export const noop = (): void => undefined

export const sleep = (ms: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, ms))

export function toEntries<T extends Record<any, any>>(
	obj: T,
): Entries<keyof T, T[keyof T]> {
	return Object.entries(obj)
}

export function fromEntries<T extends Record<any, any>>(
	entries: Entries<keyof T, T[keyof T]>,
): T {
	return Object.fromEntries(entries) as T
}

export function clone<T extends Record<any, any>>(thing: T): T {
	if (notObject(thing)) return thing
	return toEntries(thing).reduce((cloned, [key, value]) => {
		if (isArray(value)) cloned[key] = value.map(clone)
		else if (isObject(value)) cloned[key] = clone(value)
		else cloned[key] = value

		return cloned
	}, {} as T)
}
