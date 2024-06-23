import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogView from '../views/DogView.vue'
import CatView from '../views/CatView.vue'
import signView from '../views/SignView.vue'
import registerView from '../views/RegisterView.vue'
import informationView from '../views/InformationView.vue'
import cartView from '../views/CartView.vue'

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
  {
    path: '/register',
    name: 'registerView',
    component: registerView,
  },
  {
    path: '/information',
    name: 'information',
    component: informationView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
