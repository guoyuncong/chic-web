import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/category',
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/category/index'),
        meta: { title: 'category', icon: 'category' }
      }
    ]
  },
  {
    path: '/post',
    component: Layout,
    redirect: '/post/page',
    meta: { title: '文章', icon: 'form' },
    children: [
      {
        path: '/post/page',
        name: 'Post-Page',
        component: () => import('@/views/posts/index'),
        meta: { title: '文章列表', icon: 'tree' }
      },
      {
        path: '/post/detail',
        name: 'Post-Detail',
        component: () => import('@/views/posts/detail'),
        meta: { title: '文章详情', icon: 'tree' }
      },
    ]
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history',
    // 在 vue 项目中，如果前一个页面有滚动条的滚动，当路由跳转后发现滚动条的位置还保持在原来的位置，这个就带来了困扰
    // 使用 scrollBehavior 这种方法可以在每次路由跳转后手动使滚动条回到头部位置
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
