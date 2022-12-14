import 'vite-plugin-pages/client'
import 'vite-plugin-vue-layouts/client'
import { ComponentMeta } from '.'

declare module '@vue/runtime-core' {
	interface ComponentCustomOptions {
		meta: ComponentMeta
	}
}
