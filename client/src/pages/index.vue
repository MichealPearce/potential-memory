<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useState } from '../includes/functions'
import { authed } from '../middleware/authed'

export default defineComponent({
	name: 'IndexPage',
	meta: {
		middleware: [authed],
	},
})
</script>

<script lang="ts" setup>
const state = useState()

const mem = computed(() => state.dynamic.mem)
</script>

<template>
	<div class="index-page">
		<aside class="left">
			<DataCpu />
			<DataMemory />
			<DataNetwork />
		</aside>

		<aside class="right">
			<DataStorage />
		</aside>
	</div>
</template>

<style lang="scss" scoped>
.index-page {
	@include flex(row, space-around);
	padding: 1em;
	column-gap: 1em;

	.left,
	.right {
		@include flex(column, flex-start, stretch);
		flex: 1;
		row-gap: 1em;
	}
}
</style>
