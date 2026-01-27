import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '仪表板' },
      },
      {
        path: 'model/designer',
        name: 'ModelDesigner',
        component: () => import('@/views/model/designer/index.vue'),
        meta: { title: '模型设计器' },
      },
      {
        path: 'model/list',
        name: 'ModelList',
        component: () => import('@/views/model/list/index.vue'),
        meta: { title: '模型列表' },
      },
      {
        path: 'model/version',
        name: 'VersionManage',
        component: () => import('@/views/model/version/index.vue'),
        meta: { title: '版本管理' },
      },
      {
        path: 'develop/editor',
        name: 'DevelopEditor',
        component: () => import('@/views/develop/editor/index.vue'),
        meta: { title: '开发对象编辑' },
      },
      {
        path: 'system/field-rules',
        name: 'FieldRules',
        component: () => import('@/views/system/field-rules/index.vue'),
        meta: { title: '属性字段编辑规则' },
      },
      {
        path: 'system/dict',
        name: 'DictManage',
        component: () => import('@/views/system/dict/index.vue'),
        meta: { title: '数据字典' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
