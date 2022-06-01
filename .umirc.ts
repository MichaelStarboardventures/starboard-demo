import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      component: '@/layouts/layout/index',
      routes: [
        { path: '/', redirect: '/dashboard', exact: true },
        { path: '/dashboard', component: '@/pages/dashboard/index' },
      ],
    },
  ],
  fastRefresh: {},
});
