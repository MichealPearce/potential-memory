<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DataCard',
})
</script>

<script lang="ts" setup></script>

<template>
	<div class="data-card">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.data-card {
	padding: 1em;
	border: 1px solid white;
}
</style>
