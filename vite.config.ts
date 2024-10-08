import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  build: {
    outDir: 'es',
    rollupOptions: {
      external: ['vue'],
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: './dist/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: './dist/lib',
        },
      ],
    },
    lib: {
      entry: './src/index.ts',
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './',
      outputDir: ['./dist/es', './dist/lib'],
      tsConfigFilePath: './tsconfig.json',
    }),
    DefineOptions(),
  ],
})
