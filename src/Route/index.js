import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  }
]

export default new VueRouter({ routes: routes })
