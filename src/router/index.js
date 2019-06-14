import Vue from 'vue'
import Router from 'vue-router'
import dxHeader from '@/components/dxHeader'
import dxFooter from '@/components/dxFooter'
import dxIndex from '@/components/dxIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dxHeader',
      component: dxHeader
    },
    {
    	path: '/',
      name: 'dxFooter',
      component: dxFooter
    },
    {
    	path: '/',
      name: 'dxIndex',
      component: dxIndex
    }
  ]
})
