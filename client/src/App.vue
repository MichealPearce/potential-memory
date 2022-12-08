<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'test',
})
</script>

<script lang="ts" setup></script>

<template>
	<button class="test">this is a test</button>
</template>

<style lang="scss" scoped>
.test {
	text-transform: capitalize;
	background-color: red;
}
</style>
