<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataNetwork',
})
</script>

<script lang="ts" setup>
const state = useState()

const latency = computed(() => {
	const l = state.dynamic.inetLatency
	if (!l) return 0
	return `${l.toFixed(2)} ms`
})

const netInterfaces = computed(() => {
	if (!state.dynamic.networkStats) return []
	return state.dynamic.networkStats
})
</script>

<template>
	<DataCard class="data-network">
		<header>
			<DataCardTitle>Network</DataCardTitle>

			<div class="latency">
				<i class="fa-solid fa-clock" />
				<span>{{ latency }}</span>
			</div>
		</header>

		<div class="interfaces">
			<DataNetInterface
				v-for="netInf of netInterfaces"
				:interface="netInf"
			/>
		</div>
	</DataCard>
</template>

<style lang="scss" scoped>
.data-network {
	@include flex(column);

	header {
		@include flex(row, space-between, center);
		width: 100%;
		margin-bottom: 1em;

		.latency {
			@include flex(row, center, center);
			column-gap: 0.5em;
		}
	}

	.interfaces {
		@include flex(column);
		width: 100%;
		row-gap: 1em;

		.data-net-interface {
			width: 100%;
		}
	}
}
</style>
