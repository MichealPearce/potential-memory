<script lang="ts">
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
