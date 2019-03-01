import Vue from 'vue'
import Router from 'vue-router'
import Master from './views/layout/Master'
import Home from './views/Home'
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
      ]
    }
  ],
  linkActiveClass: 'is-active',
})

export default router
