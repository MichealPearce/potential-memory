<script lang="ts">
import { toNumber } from '@vue/shared'
import { Systeminformation } from 'systeminformation'
import {
	computed,
	defineComponent,
	onBeforeMount,
	onMounted,
	reactive,
} from 'vue'
import { formatBytes, useSocket, useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataMemory',
})
</script>

<script lang="ts" setup>
const socket = useSocket()

const mem = reactive<Systeminformation.MemData>({
	total: 0,
	free: 0,
	used: 0,
	active: 0,
	available: 0,
	buffcache: 0,
	buffers: 0,
	cached: 0,
	slab: 0,
	swaptotal: 0,
	swapused: 0,
	swapfree: 0,
})

const memUsed = computed(() => {
	return `${formatBytes(mem.active)} / ${formatBytes(mem.total)}`
})

const percentageUsed = computed<number>(() => {
	if (!mem.total) return 0
	const percentage = (mem.active / mem.total) * 100
	return toNumber(percentage.toFixed(1))
})

let timer: any

function fetchMemoryData() {
	socket.emit('mem', (data: Systeminformation.MemData) => {
		Object.assign(mem, data)
	})
}

onMounted(() => {
	fetchMemoryData()
	timer = setInterval(fetchMemoryData, 1000)
})

onBeforeMount(() => {
	clearInterval(timer)
})
</script>

<template>
	<DataCard class="data-memory">
		<DataCardTitle>Memory</DataCardTitle>

		<span class="used">{{ memUsed }}</span>
		<ProgressBar :percentage="percentageUsed" />
	</DataCard>
</template>

<style lang="scss" scoped>
.data-memory {
	.data-card-title {
		margin-bottom: 0.5em;
	}
}
</style>
