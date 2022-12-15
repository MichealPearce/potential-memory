<script lang="ts">
import { toNumber } from '@vue/shared'
import { computed, defineComponent } from 'vue'
import { formatBytes, useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataMemory',
})
</script>

<script lang="ts" setup>
const state = useState()

const mem = computed(() => {
	return state.dynamic.mem
})

const memUsed = computed(() => {
	if (!mem.value) return 0
	return `${formatBytes(mem.value.active)} / ${formatBytes(mem.value.total)}`
})

const percentageUsed = computed<number>(() => {
	if (!mem.value) {
		return 0
	}
	const percentage = (mem.value.active / mem.value.total) * 100
	return toNumber(percentage.toFixed(1))
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
