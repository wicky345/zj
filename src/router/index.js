import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Introduction from '@/components/introduction'
import Credit from '@/components/credit'
import Login from '@/components/login'
import News from '@/components/news'
import NewsDetail from '@/components/newsDetail'
import Business from '@/components/business'
import BusinessDetail from '@/components/businessDetail'
import Employ from '@/components/employ'

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
      children:[{
        path:'/newsDetail',
        name:'NewsDetail',
        component:NewsDetail
      }]
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
    }
  ],
  mode:'history',
})