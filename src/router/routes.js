
const routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'inicio', path: '', component: () => import('pages/IndexPage.vue') },
      { name:'typography', path: 'typography', component: () => import('pages/Typography.vue') },
      { name:'flex', path: 'flex', component: () => import('pages/FlexPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue')}
]

export default routes
