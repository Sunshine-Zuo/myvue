import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods-details',
    name: 'GoodsDetails',
    component: () => import('../views/GoodsDetails.vue'),
    meta: {
      title: '支付成功'
    }
  },
  {
    path: '/discovery',
    name: 'Discovery',
    component: () => import('../views/discovery/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
