import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/search',
        component: Index,
      },
      {
        path: '/search/:query',
        component: Index,
      },
    ],
  })
}
