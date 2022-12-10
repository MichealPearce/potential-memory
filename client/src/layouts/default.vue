<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DefaultLayout',
})
</script>

<script lang="ts" setup></script>

<template>
	<ConstructLayout class="default-layout">
		<NavigationMain />

		<RouterView />
	</ConstructLayout>
</template>

<style lang="scss" scoped>
.default-layout {
	// @include flex(column);

	.navigation-main {
		position: sticky;
		left: 0px;
		top: 0px;
	}
}
</style>
