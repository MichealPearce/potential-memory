<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'IndexPage',
})
</script>

<script lang="ts" setup></script>

<template>
	<div class="index-page">
		<RouterLink to="/about">About</RouterLink>
		updated home
	</div>
</template>

<style lang="scss" scoped>
.index-page {
}
</style>
