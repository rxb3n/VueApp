import { createRouter,  createWebHistory  } from 'vue-router'
import ArticleView from '../views/ArticleView.vue'
import HomeView from '@/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: HomeView
  },
  {
    path: '/article/:id',
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