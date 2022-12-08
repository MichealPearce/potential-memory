import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Layouts(),
		Pages({
			routeStyle: 'nuxt',
		}),
		Components({
			deep: true,
			directoryAsNamespace: true,
			dts: './src/types/components.d.ts',
		}),
	],
})
