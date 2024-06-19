import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogView from '../views/DogView.vue'
import CatView from '../views/CatView.vue'
import signView from '../views/SignView.vue'

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
  {
    path: '/cat',
    name: 'cat',
    component: CatView,
  },
  {
    path: '/sign',
    name: 'sign',
    component: signView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
