import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import { resolve } from 'path'

export default defineConfig({
	define: {
		__APP_PATH__: `"${resolve('../')}"`,
		__SERVER_PATH__: `"${resolve('./')}"`,
	},

	resolve: {
		alias: {
			server: resolve('./src'),
		},
	},

	plugins: VitePluginNode({
		adapter: 'express',
		appPath: './src/index.ts',
		tsCompiler: 'swc',
	}),

	build: {
		outDir: '../dist',
	},
})
