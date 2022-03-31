import path, { resolve } from 'path';
import { defineConfig } from 'vite';

// import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.argv.some(i => i === 'test');

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [/* vue(),  */vueJsx()],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: 'import { h } from "vue"',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/comm.scss";',
          charset: false,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    build: {
      terserOptions: {
        compress: {
          pure_funcs: isDev || isTest ? undefined : ['console.log', 'console.warn'],
        },
      },
      minify: 'terser',
      outDir: resolve(__dirname, 'dist/'),
    },
});
