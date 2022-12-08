<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home',
})
</script>

<script lang="ts" setup></script>

<template>
	<button class="test">test</button>
</template>

<style lang="scss" scoped>
.test {
	text-transform: capitalize;
	background-color: orange;
	&:hover {
		background-color: orangered;
		color: wheat;
	}
}
</style>
