import Vue from 'vue'
import Router from 'vue-router'
import Master from './views/layout/Master'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Scheduling from './views/Scheduling'
import Gallery from './views/Gallery'
import Contact from './views/Contact'
// import {Master, Login, List, Inbox, Profile} from './views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Master,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/services',
          name: 'services',
          component: Services,
        },
        {
          path: '/scheduling',
          name: 'scheduling',
          component: Scheduling,
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: Gallery,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ]
    }
  ],
  linkActiveClass: 'is-active',
})

export default router
