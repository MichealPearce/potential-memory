import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'path'

const sassyPath = path.resolve(__dirname, 'src/sassy.scss')

// https://vitejs.dev/config/
export default defineConfig(env => {
	const envars = loadEnv(env.mode, '../', ['CLIENT_'])
	const clientURL = new URL(envars.CLIENT_URL ?? 'http://localhost:3000')

	return {
		envPrefix: 'CLIENT_',

		css: {
			preprocessorOptions: {
				scss: {
					includePaths: ['src'],
					additionalData: `@import "${sassyPath}";`,
				},
			},
		},

		server: {
			port: Number(clientURL.port),
		},

		plugins: [
			vue(),
			Layouts({
				layoutsDirs: ['src/layouts'],
			}),
			Pages({
				routeStyle: 'nuxt',
			}),
			Components({
				deep: true,
				directoryAsNamespace: true,
				dts: './src/types/components.d.ts',
			}),
		],

		build: {
			outDir: '../dist/client',
			emptyOutDir: true,
		},
	}
})
