import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogView from '../views/DogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dog',
    name: 'dog',
    component: DogView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
