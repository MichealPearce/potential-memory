import type { Systeminformation } from 'systeminformation'

export interface ClientState {
	static: Systeminformation.StaticData
	dynamic: Systeminformation.DynamicData
}
