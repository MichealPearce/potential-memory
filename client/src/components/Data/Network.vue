<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataNetwork',
})
</script>

<script lang="ts" setup>
const state = useState()

const net = computed(() => {
	if (!state.dynamic.inetLatency) return 0
	return state.dynamic.inetLatency
})

const netUsed = computed(() => {
	if (!net.value) return 0
	return `${net.value.toFixed(2)} ms`
})
</script>

<template>
	<div class="data-network">
		<h1>Network Latency</h1>
		<p>{{ netUsed }}</p>
	</div>
</template>

<style lang="scss" scoped>
.data-network {
	@include flex(column, center, center);
	height: 13.6em;
	width: 33%;
	font-weight: 400;
	border: 1px solid white;

	padding: 2.75em;
}
</style>
