import {
	clone,
	inObject,
	isArray,
	isDefined,
	isFunction,
	isObject,
} from 'shared'
import { App } from 'vue'
import {
	RouteRecordRaw,
	createRouter,
	createWebHistory,
	RouteLocationNormalized,
} from 'vue-router'
import { MiddlewareHandler } from '../types'

function hasMeta(thing: any): thing is { meta: Record<any, any> } {
	return inObject(thing, ['meta']) && isObject(thing.meta)
}

function setupRouteMeta(routes: RouteRecordRaw[]): void {
	for (const route of routes) {
		if (route.children) setupRouteMeta(route.children)
		if (!route.component) continue

		if (hasMeta(route.component))
			if (route.meta) Object.assign(route.meta, route.component.meta)
			else route.meta = clone(route.component.meta)
	}
}

function setupMiddleware(app: App) {
	return async function handleMiddleware(
		to: RouteLocationNormalized,
		from: RouteLocationNormalized,
	) {
		const middlewares: Set<MiddlewareHandler> = new Set()
		for (const matched of to.matched) {
			if (!hasMeta(matched)) continue

			const middleware = matched.meta.middleware
			if (isArray(middleware))
				for (const m of middleware.filter(isFunction)) {
					middlewares.add(m)
				}
		}

		for (const mw of middlewares) {
			const result = await mw(to, from, app)
			if (isDefined(result)) return result
		}
	}
}

export function setupRouter(app: App, routes: RouteRecordRaw[]): void {
	setupRouteMeta(routes)
	console.log(routes)

	const router = createRouter({
		routes,
		history: createWebHistory(),
	})

	router.beforeEach(setupMiddleware(app))

	app.use(router)
}
