import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPageView from '../views/MainPageView.vue'
import { token } from '@/assets/scripts/auth.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainPageView.vue'),
      meta: {requiresAuth: true}
    },
  ],
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  const isAuthentication = !!token.value

  if(requiresAuth && !isAuthentication){
    next('/');
  } else if(to.path === '/' && isAuthentication){
    next('/main')
  } else{
    next()
  }
})

export default router
