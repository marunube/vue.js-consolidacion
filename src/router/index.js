import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreditView from '../views/CreditView.vue'
import GameAlone from '../views/GameAlone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/credit',
    name: 'credit',
    component: CreditView,
  },{
    path: '/game/:id/',
    name: 'game',
    component: GameAlone,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
