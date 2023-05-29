import { createRouter,  createWebHistory  } from 'vue-router'
import ArticleView from '../views/ArticleView.vue'
import Home from '@/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'ArticleView',
    component: ArticleView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

router.replace('/')

export default router;
