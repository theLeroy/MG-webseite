import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/views/Frontpage.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: () => import(/* webpackChunkName: "about" */ './views/Timeline.vue')
    },
    {
      path: '/Tickets',
      name: 'Tickets',
      component: () => import(/* webpackChunkName: "about" */ './views/Tickets.vue')
    },
    {
      path: '/Infos',
      name: 'Infos',
      component: () => import(/* webpackChunkName: "about" */ './views/Infos.vue')
    }
  ]
})
