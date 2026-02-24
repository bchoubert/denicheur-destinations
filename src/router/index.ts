import { createRouter, createWebHistory } from 'vue-router'
import Splash from '@/views/Splash.vue'
import Qcm from '@/views/Qcm.vue'
import Progress from '@/views/Progress.vue'
import Result from '@/views/Result.vue'
import Start from '@/views/Start.vue'
import Interactive from '@/views/Interactive.vue'
import CalcErr from '@/views/CalcErr.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Splash,
    },
    {
      path: '/start',
      name: 'start',
      component: Start,
    },
    {
      path: '/qcm',
      name: 'about',
      component: Qcm,
    },
    {
      path: '/interactive',
      name: 'interactive',
      component: Interactive,
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress,
    },
    {
      path: '/calcerr',
      name: 'calcerr',
      component: CalcErr,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    }
  ],
})

router.beforeEach((to, from) => {
  console.log('[nav]', from.fullPath, '→', to.fullPath, 'state:', history.state)
})

export default router
