import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Main from '@/views/main/index.vue'
import LargeModel from '@/views/main/large-model/index.vue'
import MyLession from '@/views/main/mylesson/index.vue'
import Coder from '@/views/main/coder/index.vue'
import Ranking from '@/views/main/ranking/index.vue'
import Mine from '@/views/main/mine/index.vue'
import NotFound from '@/views/error/index.vue'
import CoderPromote from '@/views/main/coder/c-views/code-promote.vue'
import GengerCode from '@/views/main/coder/c-views/genger-code.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/main',
          redirect: '/main/large_model'
        },
        {
          path: '/main/large_model',
          component: LargeModel
        },
        {
          path: '/main/mylession',
          component: MyLession
        },
        {
          path: '/main/coder',
          component: Coder,
          children: [
            {
              path: '/main/coder',
              redirect: '/main/coder/genger-code'
            },
            {
              path: '/main/coder/genger-code',
              component: GengerCode
            },
            {
              path: '/main/coder/code-promote',
              component: CoderPromote
            }
          ]
        },
        {
          path: '/main/ranking',
          component: Ranking
        },
        {
          path: '/main/mine',
          component: Mine
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
