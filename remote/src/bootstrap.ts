import { createApp } from 'vue'
import { createPinia } from "pinia";
import './assets/styles/style.css';
import './assets/styles/tailwind.css';
import App from './App.vue'
import { router } from './router.js'
import { vuetify } from './vuetify.js'
import { Field, Form } from './vee-validate'

const app = createApp(App);
app.use(createPinia());
app.use(router)
app.use(vuetify)

// register component
app.component('Field', Field)
app.component('FormObserver', Form)

app.mount("#app");

