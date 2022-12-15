<script lang="ts">
import { Systeminformation } from 'systeminformation'
import { computed, defineComponent } from 'vue'
import { formatBytes } from '../../includes/functions'

export default defineComponent({
	name: 'DataNetInterface',
})
</script>

<script lang="ts" setup>
const props = defineProps<{
	interface: Systeminformation.NetworkStatsData
}>()

const interfaceName = computed(() => {
	return props.interface.iface
})

const interfaceActive = computed(() => {
	return props.interface.operstate === 'up'
})

const interfaceStats = computed(() => ({
	up: formatBytes(props.interface.tx_sec),
	down: formatBytes(props.interface.rx_sec),
	dropped: formatBytes(props.interface.tx_dropped + props.interface.rx_dropped),
	ms: props.interface.ms,
}))
</script>

<template>
	<div class="data-net-interface">
		<div class="interface-details">
			<div class="interface-active">
				<i
					v-if="interfaceActive"
					class="fa-solid fa-circle-check good"
				/>

				<i
					v-else
					class="fa-solid fa-circle-xmark bad"
				/>
			</div>

			<h3 class="interface-name">{{ interfaceName }}</h3>
		</div>

		<div class="interface-up net-stat">
			<span class="bytes">{{ interfaceStats.up }}</span>
			<i class="fa-solid fa-chevron-up"></i>
		</div>

		<div class="interface-down net-stat">
			<span class="bytes">{{ interfaceStats.down }}</span>
			<i class="fa-solid fa-chevron-down"></i>
		</div>

		<div class="interface-dropped net-stat">
			<span class="bytes">{{ interfaceStats.dropped }}</span>
			<i class="fa-solid fa-exclamation"></i>
		</div>

		<!-- <div class="interface-ping net-stat">
			<span class="bytes">{{ interfaceStats.ms }} ms</span>
			<i class="fa-solid fa-spinner"></i>
		</div> -->
	</div>
</template>

<style lang="scss" scoped>
.data-net-interface {
	@include flex(row, space-between, center);

	.interface-details {
		@include flex(row, center, center);
		column-gap: 1em;

		.interface-active {
			@include flex(row, center, center);

			.good {
				color: #00ff47;
			}

			.bad {
				color: red;
			}
		}
	}

	.net-stat {
		@include flex(column, center, center);
		row-gap: 0.5em;
		flex: 1;
	}

	.interface-up i {
		color: #49ff09;
	}

	.interface-down i {
		color: #ff0000;
	}

	.interface-dropped i {
		color: #ffe70c;
	}

	.interface-ping i {
		color: #061fff;
	}
}
</style>
