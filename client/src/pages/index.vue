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
		<RouterLink to="/about">About</RouterLink>
		updated home
	</div>
</template>

<style lang="scss" scoped>
.index-page {
	height: 10000px;
}
</style>
