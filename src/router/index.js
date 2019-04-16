import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Introduction from '@/components/introduction'
import Credit from '@/components/credit'
import Login from '@/components/user/login'
import News from '@/components/news/news'
import NewsDetail from '@/components/news/newsDetail'
import Business from '@/components/business/business'
import BusinessDetail from '@/components/business/businessDetail'
import Employ from '@/components/employ/employ'
import EmployDetail from '@/components/employ/employDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction,
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path:'/news',
      name:'News',
      component:News,
    }, 
    {
      path:'/newsDetail',
      name:'NewsDetail',
      component:NewsDetail
    },
    {
      path:'/business',
      name:'Business',
      component:Business,
    },
    {
      path:'/businessDetail',
      name:'BusinessDetail',
      component:BusinessDetail
    },
    {
      path:'/employ',
      name:'Employ',
      component:Employ,
    },
    {
      path:'/employDetail',
      name:'EmployDetail',
      component:EmployDetail,
    }
  ],
  mode:'history',
})