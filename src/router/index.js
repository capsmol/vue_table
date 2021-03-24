import Vue from 'vue'
import VueRouter from 'vue-router'
import SmallData from '../views/SmallData.vue'
import BigData from '../views/BigData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/smallData',
    name: 'TableWithSmallData',
    component: SmallData
  },
  {
    path: '/bigData',
    name: 'TableWithBigData',
    component: BigData
  }
]

const router = new VueRouter({
  routes
})

export default router
