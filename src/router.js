import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      // NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  // NProgress.done()
})


export default router
