import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import { resolve } from 'path'

export default defineConfig({
	envDir: '../',
	envPrefix: ['SERVER_', 'CLIENT_'],

	define: {
		__APP_PATH__: `"${resolve('../')}"`,
		__BIN_PATH__: `"${resolve('../bin')}"`,
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
		emptyOutDir: true,
	},
})
