import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Pets from './views/Pets.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pets/:species/:id',
      name: 'pets',
      component: Pets
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    }
  ]
})
