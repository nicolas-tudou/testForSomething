export default [
  {
    path: '/test/fixedTest',
    name: 'fixedTest',
    component: () => import('@/views/fixedTest')
  },
  {
    path: '/test/focusTest',
    name: 'focusTest',
    component: () => import('@/views/focusTest')
  },
  {
    path: '/test/stackContext',
    name: 'stackContext',
    component: () => import('@/views/stackContext')
  },
  {
    path: '/test/zindexTest',
    name: 'zindexTest',
    component: () => import('@/views/zindexTest')
  },
  {
    path: '/test/cssTest',
    name: 'cssTest',
    component: () => import('@/views/cssTest')
  }
]
