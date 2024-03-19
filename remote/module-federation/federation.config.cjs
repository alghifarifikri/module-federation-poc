const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

const deps = require("../package.json").dependencies;

module.exports = withNativeFederation({
  name: "remote-app",
  exposes: {
    "./remote-component": "./src/components/Counter.vue",
    "./Carousel": "./src/components/Carousel.vue",
    "./Navigation": "./src/components/Navigation.vue",
    "./TextField": "./src/components/Atoms/Input/TextField.vue",
    "./utils-days": "./src/utils/days.ts",
    "./utils/helper": "./src/utils/helpers.js",
    "./vee-validate": "./src/vee-validate.ts",
    "./vuetify": "./src/vuetify.ts",
    // "./custom-element": './src/main.js',
  },
  skip: ['vuetify'],
  shared: {
    // "@vee-validate/rules": "^4.12.5",
    // "vuetify": "^3.5.4",
    // "vee-validate": "^4.12.5",
    // "vuetify": { singleton: true, requiredVersion: deps["vuetify"] },
    ...deps,
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    })
  }
});