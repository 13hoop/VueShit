import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import ButtonPage from '../pages/yrButtonPage'
import ListPage from '../pages/yrListPage'
import NavPage from '../pages/yrNavPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/btn',
      name: 'btn',
      component: ButtonPage
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    },
    {
      path: '/nav',
      name: 'nav',
      component: NavPage
    }
  ]
})
