import { reactive } from 'vue'
import { ClientState } from '../types'

export const state = reactive({
	static: {},
	dynamic: {},
}) as ClientState
