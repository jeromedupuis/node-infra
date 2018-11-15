import _ from 'lodash';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageIndex from '@/components/pages/index/Index';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex
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

router.beforeEach(async (to, from, next) => {
  let params = _.get(to, 'params', null);
  if(params) {
    await Vue.$store.commit('SET_CURRENT_SPORT', _.get(params, 'sportId', null));
    await Vue.$store.commit('SET_CURRENT_STYLE', _.get(params, 'styleId', null));
    await Vue.$store.commit('SET_CURRENT_BELT', _.get(params, 'beltId', null));
    await Vue.$store.commit('SET_CURRENT_TECHNIQUE', _.get(params, 'techniqueId', null));
    await Vue.$store.commit('SET_CURRENT_KATA', _.get(params, 'kataId', null));
  }
  next();
});


export default router;
