<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DataCardTitle',
})
</script>

<script lang="ts" setup></script>

<template>
	<h2 class="data-card-title">
		<slot />
	</h2>
</template>

<style lang="scss" scoped>
.data-card-title {
	padding: 0px;
}
</style>
