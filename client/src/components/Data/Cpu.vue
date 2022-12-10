<script lang="ts">
import { currentLoad } from 'systeminformation'
import { computed, defineComponent } from 'vue'
import { useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataCpu',
})
</script>

<script lang="ts" setup>
const state = useState()

const cpu = computed(() => {
	if (!state.dynamic.currentLoad) return 0
	return state.dynamic.currentLoad.currentLoad
})

const cpuLoad = computed(() => {
	if (!cpu.value) return 0
	return `${cpu.value.toFixed(2)}%`
})

const cpuTemp = computed(() => {
	if (!state.dynamic.temp) return 0
	return `${state.dynamic.temp.main}°C`
})
</script>

<template>
	<div class="data-cpu">
		<h1>CPU</h1>
		Current load: <span class="cpu-percentage">{{ cpuLoad }}</span> Current
		temperature: <span class="cpu-percentage">{{ cpuTemp }}</span>
	</div>
</template>

<style lang="scss" scoped>
.data-cpu {
	@include flex(column, center, center);

	width: 33%;
	font-weight: 400;
	border: 1px solid white;

	padding: 1em;
}

.cpu-percentage {
	font-size: 2em;
	font-weight: bold;
}
</style>
