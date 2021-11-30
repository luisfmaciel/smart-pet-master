import { createRouter, createWebHistory } from 'vue-router'
import RegisterPet from '../components/RegisterPet.vue'
import VaccineCard from '../view/VaccineCard.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
