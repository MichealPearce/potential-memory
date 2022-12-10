<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useSocket } from './includes/functions'

export default defineComponent({
	name: 'App',
})
</script>

<script lang="ts" setup>
const socket = useSocket()

const mem = reactive({
	active: 0,
	available: 0,
	buffcache: 0,
	buffers: 0,
	cached: 0,
	free: 0,
	slab: 0,
	swapfree: 0,
	swaptotal: 0,
	swapused: 0,
	total: 0,
	used: 0,
})

const percentUsed = computed(() => {
	if (mem.total === 0) return 0
	return ((mem.active / mem.total) * 100).toFixed(4)
})

function fetchDyn() {
	socket.emit('dynamic', (data: any) => {
		if (data.mem) Object.assign(mem, data.mem)
		setTimeout(fetchDyn, 100)
	})
}

onMounted(fetchDyn)
</script>

<template>
	<div>
		{{ percentUsed }}

		<RouterView />
	</div>
</template>

<style lang="scss">
* {
	box-sizing: border-box;
}

html,
body,
#app {
	width: 100%;
	height: 100%;

	padding: 0px;
	margin: 0px;

	background-color: $background-color;
	color: white;

	font-family: 'Roboto', sans-serif;
	font-size: medium;

	overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	padding: 0.5em 0px;
	margin: 0px;
	font-weight: 500;
}

p {
	padding: 0.5em 0px;
	margin: 0px;
}
</style>
