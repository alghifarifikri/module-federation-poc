import { federation } from "@module-federation/vite";
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild";
import pluginVue from "esbuild-plugin-vue-next";
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    server: {
      fs: {
        allow: ["."],
      },
    },
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
      dedupe: ['vue']
    },
    build:{
      rollupOptions: {
        external: ['vue'],
        resolve: {
          alias: {
            vue: resolve(__dirname, './node_modules/vue'),
            '@vue': resolve(__dirname, './node_modules/@vue')
          },
          dedupe: ['vue', '@vue'],
        },
        output: {
          globals: {
            vue: 'vue'
          }
        }
      }
    },
    rollupOptions: {
      external: ['vue'],
      resolve: {
        alias: {
          vue: resolve(__dirname, './node_modules/vue'),
          '@vue': resolve(__dirname, './node_modules/@vue')
        },
        dedupe: ['vue', '@vue'],
      },
      output: {
        globals: {
          vue: 'vue'
        }
      }
    },
    plugins: [
      await federation({
        options: {
          workspaceRoot: __dirname,
          outputPath: "dist",
          tsConfig: "tsconfig.json",
          federationConfig: "module-federation/federation.config.cjs",
          verbose: true,
          dev: command === "serve",
        },
        adapter: createEsBuildAdapter({ plugins: [pluginVue()] }),
      }),
      vue()
    ]
  }
})
