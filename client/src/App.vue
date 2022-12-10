<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useSocket } from './includes/functions'

export default defineComponent({
	name: 'App',
})
</script>

<script lang="ts" setup></script>

<template>
	<RouterView />
</template>

<style lang="scss">
* {
	box-sizing: border-box;
}

html,
body,
#app {
	width: 100%;
	height: 100%;

	padding: 0px;
	margin: 0px;

	background-color: $background-color;
	color: white;

	font-family: 'Roboto', sans-serif;
	font-size: medium;

	overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	padding: 0.5em 0px;
	margin: 0px;
	font-weight: 500;
}

p {
	padding: 0.5em 0px;
	margin: 0px;
}
</style>
