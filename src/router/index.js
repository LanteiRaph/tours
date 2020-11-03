import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/planned',
    name: 'Planned-experience',
    component: () => import(/* webpackChunkName: "Planned" */ '../views/Planned.vue')
  },
  {
    path: '/single_detail/:current/:entity',
    name: 'SingleDetail',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/single_detail.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/login.vue')
  }, {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/Cart.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/SignUp.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/Plan.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/Activity.vue')
  },
  {
    path: '/getride',
    name: 'GetRide',
    component: () => import('../views/GetRide.vue')
  },
  {
    path: '/planner',
    name: 'PlannerWizard',
    component: () => import('../views/Planner.vue')
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: () => import('../views/Hotel.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
