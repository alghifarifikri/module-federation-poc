// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncContext: true,
    asyncEntry: true,
    externalVue: true
  },
  app: {
    head: {
      script: [
        { type: 'esms-options', innerHTML: '{ "shimMode": true, "mapOverrides": true }' },
        // { src: 'https://ga.jspm.io/npm:es-module-shims@1.8.2/dist/es-module-shims.js' },
        // { src: 'https://ga.jspm.io/npm:es-module-shims@1.5.17/dist/es-module-shims.js', defer: true },
        { src: 'https://unpkg.com/es-module-shims', defer: true },
      ]
    }
  },
  vite: {
    server: {
      fs: {
        allow: ["."],
      },
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  image: {
    providers: {
      customProvider: {
        name: 'customProvider', // optional value to overrider provider name
        provider: '~/providers/customProvider.ts', // Path to custom provider
        options: {
          // ... provider options
          baseURL: "http://localhost:5001"
        }
      }
    }
  }
})
