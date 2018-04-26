import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import Dashboard from '@/components/Dashboard'
import CompanyList from '@/components/CompanyList'
import CompanyDetail from '@/components/CompanyDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/company-list',
    component: CompanyList
  },
  {
    path: '/company/:symbol',
    component: CompanyDetail,
    props: true
  }
]

export default new VueRouter({ routes })
