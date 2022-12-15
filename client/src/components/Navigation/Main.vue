<script lang="ts">
import { computed, defineComponent } from 'vue'
import { datejs, useState } from '../../includes/functions'

export default defineComponent({
	name: 'NavigationMain',
})
</script>

<script lang="ts" setup>
const state = useState()

const osName = computed(() => {
	const s = state.static
	if (!s.os) return 'Construct'
	return `${s.os.distro} ${s.os.release}`
})

const time = computed(() => {
	const s = state.dynamic
	if (!s.time) return '00:00:00'
	return datejs(s.time.current).format('h:mm a')
})
</script>

<template>
	<nav class="navigation-main">
		<div class="branding">
			<h1>{{ osName }}</h1>
			<h2>{{ time }}</h2>
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
		@include flex(row, center, center);
		padding: 0px 1em;
		column-gap: 1em;
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
