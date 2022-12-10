<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructLink',
})
</script>

<script lang="ts" setup>
const props = defineProps<{
	to: string
}>()

const isExternal = computed(() => props.to.startsWith('http'))
const attrName = computed(() => (isExternal.value ? 'href' : 'to'))
const tagName = computed(() => (isExternal.value ? 'a' : 'RouterLink'))
</script>

<template>
	<component
		:is="tagName"
		:[attrName]="props.to"
		class="construct-link"
		:class="{ 'is-external': isExternal }"
	>
		<slot />
	</component>
</template>

<style lang="scss" scoped>
.construct-link {
}
</style>
