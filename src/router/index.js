/*
*路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
import FooterGuide from '../components/FooterGuide/FooterGuide'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/footerGuide',
      component:FooterGuide
    },
    {
      path:'/mSite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/mSite'
    },
    {
      path:'/login',
      component:Login
    }
  ],
  mode:'history'
})
