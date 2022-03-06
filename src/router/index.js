import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EscapeTheOfficeView from '../views/EscapeTheOfficeView.vue'
import PunchTimeView from '../views/PunchTimeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/escape-the-office',
    name: 'escape-the-office',
    component: EscapeTheOfficeView
  },
  {
    path: '/punch-time',
    name: 'punch-time',
    component: PunchTimeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
