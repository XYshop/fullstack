import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/home-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'upvote',
        name: 'upvote',
        component: () =>
          import(
            /* webpackChunkName: "upvote" */ '../views/home/main/up-vote.vue'
          )
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/home/main/week-calendar.vue'
          )
      }
    ]
  },
  // 暂时使用主路由编程式导航
  {
    path: '/document',
    name: 'document',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/document/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
