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
	name: 'DataStorage',
})
</script>

<script lang="ts" setup>
const socket = useSocket()

// use object instead of array so we can easily replace the entire array without losing reactivity
const state = reactive({
	volumes: [] as Systeminformation.FsSizeData[],
})

let timer: any

function fetchVolumes() {
	console.log('fetching volumes')
	socket.emit('fsSize', (data: Systeminformation.FsSizeData[]) => {
		state.volumes = data
	})
}

onMounted(() => {
	fetchVolumes()
	timer = setInterval(fetchVolumes, 10000)
})

onBeforeMount(() => clearInterval(timer))
</script>

<template>
	<DataCard class="data-storage">
		<DataCardTitle>Storage</DataCardTitle>

		<div class="volumes">
			<DataStorageVolume
				v-for="volume of state.volumes"
				:volume="volume"
			/>
		</div>
	</DataCard>
</template>

<style lang="scss" scoped>
.data-storage {
	@include flex(column);

	.volumes {
		@include flex(column, flex-start, stretch);
		width: 100%;
		row-gap: 1em;
	}
}
</style>
