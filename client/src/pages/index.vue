<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useState } from '../includes/functions'

export default defineComponent({
	name: 'IndexPage',
})
</script>

<script lang="ts" setup>
const state = useState()

const mem = computed(() => state.dynamic.mem)
</script>

<template>
	<div class="index-page">
		<DataMemory />
		<DataCpu />
		<DataNetwork />
	</div>
</template>

<style lang="scss" scoped>
.index-page {
	@include flex(row, space-around, center);
	padding: 1em;
	row-gap: 2em;
}

.data-memory {
}
</style>
