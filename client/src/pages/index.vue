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
	</div>
</template>

<style lang="scss" scoped>
.index-page {
	padding: 1em;
}

.data-memory {
}
</style>
