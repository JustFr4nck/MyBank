import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/Home.vue'
import Guadagno from '../views/Guadagno.vue'
import Spesa from '../views/Spesa.vue'
import Movimenti from '../views/Movimenti.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyHome,
    },
    {
      path: '/guadagno',
      name: 'guadagno',
      component: Guadagno,
    },
    {
        path: '/spesa',
        name: 'spesa',
        component: Spesa,
    },
    {
      path: '/movimenti',
      name: 'movimenti',
      component: Movimenti,
    }
  ],
})

export default router
