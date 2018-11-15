import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageIndex from '@/components/pages/index/Index';
import PageAbout from '@/components/pages/about/About';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    {
      path: '/about',
      component: PageAbout
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      };
    }
    return { x: 0, y: 0 };
  }
});

export default router;
