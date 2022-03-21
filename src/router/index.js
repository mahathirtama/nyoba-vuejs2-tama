import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsVIew from '../views/ItemsView.vue'
import ItemDetail from '../views/ItemsDetail.vue'
import CartViewVue from '../views/CartView.vue'
import BeliSuccessVue from '../views/BeliSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/items',
    name: 'items',
    component: ItemsVIew
  },
  {
    path: '/items/:id',
    name: 'itemsDetail',
    component: ItemDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartViewVue
  },
  {
    path: '/beli-success',
    name: 'beli-success',
    component: BeliSuccessVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
