<script lang="ts">
import { Systeminformation } from 'systeminformation'
import { computed, defineComponent } from 'vue'
import { formatBytes } from '../../includes/functions'

export default defineComponent({
	name: 'DataStorageVolume',
})
</script>

<script lang="ts" setup>
const props = defineProps<{
	volume: Systeminformation.FsSizeData
}>()

const vol = computed(() => props.volume)
</script>

<template>
	<div class="data-storage-volume">
		<h3 class="volume-mount">{{ vol.mount }}</h3>

		<div class="volume-size">
			<span class="volume-size-used">{{ formatBytes(vol.used) }}</span>
			/
			<span class="volume-size-total">{{ formatBytes(vol.size) }}</span>
		</div>

		<ProgressBar :percentage="vol.use" />
	</div>
</template>

<style lang="scss" scoped>
.data-storage-volume {
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto auto;
	grid-template-areas: 'mount size' 'prog prog';
	align-items: center;

	.volume-mount {
		grid-area: mount;
	}

	.volume-size {
		grid-area: size;
	}

	.progress-bar {
		grid-area: prog;
	}
}
</style>
