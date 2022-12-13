import type { Systeminformation } from 'systeminformation'

export interface DynamicData extends Systeminformation.DynamicData {
	temp: Systeminformation.CpuTemperatureData
}

export interface ClientState {
	static: Systeminformation.StaticData
	dynamic: DynamicData
}
