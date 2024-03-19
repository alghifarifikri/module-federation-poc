import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/index.vue'

export const routes = [
  {
    name: 'home-page',
    path: '/',
    component: Home,
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
