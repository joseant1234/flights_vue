import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      component: require("@/pages/Search.vue").default
    },
    {
      path: '/search',
      name: 'search',
      meta: { layout: 'default' },
      component: () => import("@/pages/Search.vue"),
    },
    {
      path: '/flights',
      name: 'flights',
      meta: { layout: 'default' },
      component: () => import("@/pages/Flight.vue"),
    },
    {
      path: '/airports',
      name: 'airports',
      meta: { layout: 'default' },
      component: () => import("@/pages/Airport.vue"),
    },
    {
      path: '*',
      name: 'notFound',
      component: require("@/pages/NotFound.vue").default
    }
  ]
})
