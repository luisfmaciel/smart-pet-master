import { createRouter, createWebHistory } from 'vue-router'
import RegisterPet from '../view/RegisterPet.vue'
import VaccineCard from '../view/VaccineCard.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'RegisterPet',
    component: RegisterPet
  },
  {
    path: '/VaccineCard',
    name: 'VaccineCard',
    component: VaccineCard
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFound 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
