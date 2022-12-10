<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructPage',
})
</script>

<script lang="ts" setup></script>

<template>
	<div class="construct-page">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.construct-page {
	width: 100%;
	min-height: 100%;
}
</style>
