import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import Dashboard from '@/components/Dashboard'
import CompanyList from '@/components/CompanyList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/company-list',
    component: CompanyList
  }
]

export default new VueRouter({ routes })
