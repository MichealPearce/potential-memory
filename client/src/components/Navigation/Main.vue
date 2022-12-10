<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'NavigationMain',
})
</script>

<script lang="ts" setup></script>

<template>
	<nav class="navigation-main">
		<div class="branding">
			<h1>Server Dashboard</h1>
		</div>

		<div class="menu">
			<ConstructLink to="/">Home</ConstructLink>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.navigation-main {
	@include flex(row, space-between, center);
	width: 100%;
	height: 50px;

	background-color: $background-color;

	.branding {
		padding: 0px 1em;
	}

	.menu {
		@include flex(row, space-between, center);
		height: 100%;

		.construct-link {
			@include flex(row, center, center);
			height: 100%;
			padding: 0px 1.75em;

			color: white;
			text-decoration: none;
			font-weight: 400;

			transition: background-color 0.25s, color 0.25s;

			&:hover {
				background-color: white;
				color: $background-color;
			}
		}
	}
}
</style>
