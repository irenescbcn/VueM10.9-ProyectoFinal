import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    props: route => ({ query: route.query.users })
  },
  {
    path: '/users/:id',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/users/user',
    name: 'userCard',
    component: () => import(/* webpackChunkName: "user" */ '../components/userCard.vue')
  },
  {
    path: '/pictures/:id',
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/Pictures.vue')
  },
  {
    path: '/pictures/picturesAlbum',
    name: 'PicturesAlbum',
    component: () => import(/* webpackChunkName: "pictures" */ '../components/PicturesAlbum.vue')
  },
  {
    path: '/viewUsers',
    name: 'ViewUsers',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/ViewUsers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
