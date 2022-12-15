<script lang="ts">
import { Systeminformation } from 'systeminformation'
import {
	computed,
	defineComponent,
	onBeforeMount,
	onMounted,
	reactive,
} from 'vue'
import { useSocket, useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataNetwork',
})
</script>

<script lang="ts" setup>
const socket = useSocket()

const networkStats = reactive({
	interfaces: [] as Systeminformation.NetworkStatsData[],
	latency: 0,
})

let timer: any

function fetchNetworkData() {
	socket.emit('networkStats', (data: Systeminformation.NetworkStatsData[]) => {
		networkStats.interfaces = data
	})
	socket.emit('inetLatency', (data: number) => {
		networkStats.latency = data
	})
}

onMounted(() => {
	fetchNetworkData()
	timer = setInterval(fetchNetworkData, 1000)
})

onBeforeMount(() => {
	clearInterval(timer)
})

const latency = computed(() => {
	return `${networkStats.latency.toFixed(2)} ms`
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
				v-for="netInf of networkStats.interfaces"
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
