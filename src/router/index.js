import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import XemPhim from '@/components/XemPhim'
import News from '@/components/News'
import Error404 from '@/components/Error404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/xem-phim/:slug/:id',
      name: 'XemPhim',
      component: XemPhim
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
