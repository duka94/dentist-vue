/* tslint:disable:no-var-requires */

import Vue from 'vue'
import Router from 'vue-router'
import Master from './views/layout/Master'
import Home from './views/Home'
import Services from './views/Services'
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
          path: '/services',
          name: 'services',
          component: Services,
        },
      ]
    }
  ],
  linkActiveClass: 'is-active',
})

export default router
