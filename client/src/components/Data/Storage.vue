<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useState } from '../../includes/functions'

export default defineComponent({
	name: 'DataStorage',
})
</script>

<script lang="ts" setup>
const state = useState()

const volumes = computed(() => {
	if (!state.dynamic.fsSize) return []
	return state.dynamic.fsSize
})
</script>

<template>
	<DataCard class="data-storage">
		<DataCardTitle>Storage</DataCardTitle>

		<div class="volumes">
			<DataStorageVolume
				v-for="volume of volumes"
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
