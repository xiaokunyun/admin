import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteMeta,
} from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          isShow: true,
          title: '主页',
        },
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      isShow: true,
      title: 'user',
    },
    component: () => import('@/views/user/index.vue'),
  },
  {
    path: '/setup',
    name: 'setup',
    meta: {
      isShow: true,
      title: '登录',
    },
    component: () => import('@/views/setup/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
export default router
