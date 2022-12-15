<script lang="ts">
import { Systeminformation } from 'systeminformation'
import {
	computed,
	defineComponent,
	onBeforeMount,
	onMounted,
	reactive,
} from 'vue'
import { useSocket } from '../../includes/functions'

export default defineComponent({
	name: 'DataCpu',
})
</script>

<script lang="ts" setup>
const socket = useSocket()
const currentLoad = reactive<Systeminformation.CurrentLoadData>({
	avgLoad: 0,
	currentLoad: 0,
	currentLoadUser: 0,
	currentLoadSystem: 0,
	currentLoadNice: 0,
	currentLoadIdle: 0,
	currentLoadIrq: 0,
	rawCurrentLoad: 0,
	rawCurrentLoadUser: 0,
	rawCurrentLoadSystem: 0,
	rawCurrentLoadNice: 0,
	rawCurrentLoadIdle: 0,
	rawCurrentLoadIrq: 0,
	cpus: [],
})

const temp = reactive<Systeminformation.CpuTemperatureData>({
	main: 0,
	cores: [],
	max: 0,
})

const cpuLoad = computed(() => {
	return `${currentLoad.currentLoad.toFixed(2)}%`
})

const cpuTemp = computed(() => {
	return `${temp.main}°C`
})

let timer: any
function fetchCurrentLoadData() {
	socket.emit('currentLoad', (data: Systeminformation.CurrentLoadData) => {
		Object.assign(currentLoad, data)
	})
}

function fetchCPUTemp() {
	socket.emit(
		'cpuTemperature',
		(data: Systeminformation.CpuTemperatureData) => {
			Object.assign(temp, data)
		},
	)
}

onMounted(() => {
	fetchCurrentLoadData()
	timer = setInterval(() => {
		fetchCurrentLoadData()
		fetchCPUTemp()
	}, 1000)
})

onBeforeMount(() => clearInterval(timer))
</script>

<template>
	<DataCard class="data-cpu">
		<DataCardTitle>CPU</DataCardTitle>

		<div class="stat">
			Current load:
			<span class="cpu-percentage">{{ cpuLoad }}</span>
		</div>

		<div class="stat">
			Current temperature:
			<span class="cpu-temp">{{ cpuTemp }}</span>
		</div>
	</DataCard>
</template>

<style lang="scss" scoped>
.data-card.data-cpu {
	@include flex(row, space-between, center);

	.cpu-percentage {
		font-size: 2em;
		font-weight: bold;
	}

	.cpu-temp {
		font-size: 2em;
		font-weight: bold;
	}

	.stat {
		@include flex(column, center, center);
	}
}
</style>
