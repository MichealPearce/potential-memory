import type { Systeminformation } from 'systeminformation'
import { App } from 'vue'
import {
	RouteLocationNormalized,
	RouteLocationRaw,
	RouteMeta,
} from 'vue-router'

export interface DynamicData extends Systeminformation.DynamicData {
	temp: Systeminformation.CpuTemperatureData
}

export interface ClientState {
	static: Systeminformation.StaticData
	dynamic: DynamicData
}

type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean

export type MiddlewareHandler = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	app: App,
) => NavigationGuardReturn | Promise<NavigationGuardReturn>

export interface ComponentMeta extends RouteMeta {
	middleware?: MiddlewareHandler[]
}
