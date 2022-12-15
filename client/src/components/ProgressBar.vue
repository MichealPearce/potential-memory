<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'ProgressBar',
})
</script>

<script lang="ts" setup>
const props = defineProps<{
	percentage: number
}>()

const percent = computed(() => `${props.percentage}%`)
</script>

<template>
	<div class="progress-bar">
		<span class="percent">{{ percent }}</span>
	</div>
</template>

<style lang="scss" scoped>
.progress-bar {
	@include flex(row, flex-end, center);
	width: 100%;
	height: 40px;

	position: relative;

	background-color: lightgray;

	overflow: hidden;
	border-radius: 5px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: v-bind(percent);
		height: 100%;
		background-color: #00bfff;
		transition: width 0.5s ease-in-out;
	}
	.percent {
		padding: 0.25rem;

		margin-right: 1em;
		z-index: 1;

		background-color: lightgray;
		color: black;
		font-weight: bold;

		border-radius: 5px;
	}
}
</style>
