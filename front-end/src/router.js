import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/index';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index'),
      children: []
    },
    {
      path: '/editor', // #!zh 编辑器页面，核心功能部分
      name: 'editorContainer',
      component: Layout,
      redirect: '',
      children: [
        {
          path: '/editor/:id',
          name: 'editor',
          component: () => import('@/views/edit/editor.vue')
        }
      ]
    }
  ]
});
