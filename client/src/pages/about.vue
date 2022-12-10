<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AboutPage',
})
</script>

<script lang="ts" setup></script>

<template>
	<ConstructPage class="about-page">
		<RouterLink to="/">Home</RouterLink>
		updated about
	</ConstructPage>
</template>

<style lang="scss" scoped>
.about-page {
}
</style>
