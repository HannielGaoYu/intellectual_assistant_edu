import { LOGIN_TOKEN } from '@/global/contsants'
import { localCache } from '@/utils/useStorage'
import { createRouter, createWebHashHistory } from 'vue-router'

const LargeModel = () => import('@/views/main/large-model/index.vue')
const Coder = () => import('@/views/main/coder/index.vue')
const Mine = () => import('@/views/main/mine/index.vue')
const NotFound = () => import('@/views/error/index.vue')
const CoderPromote = () => import('@/views/main/coder/c-views/code-promote.vue')
const GengerCode = () => import('@/views/main/coder/c-views/genger-code.vue')
const Login = () => import('@/views/login/LoginCms.vue')
const Main = () => import('@/views/main/index.vue')
const MyLession = () => import('@/views/main/mylesson/index.vue')
const LearnProcess = () => import('@/views/main/learn-process/index.vue')
const Ranking = () => import('@/views/main/ranking/index.vue')

const ShowContent = () => import('@/views/main/mylesson/c-views/show-content.vue')

const video = () => import('@/views/main/mylesson/c-views/c-views/lession-video-v2.vue')
const ppt = () => import('@/views/main/mylesson/c-views/c-views/lession-ppt.vue')
const homework = () => import('@/views/main/mylesson/c-views/c-views/lession-homework.vue')
const summary = () => import('@/views/main/mylesson/c-views/c-views/lesssion-summary.vue')

const routes = [
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
        redirect: '/main/mylession'
      },
      {
        path: '/main/large_model',
        component: LargeModel,
        meta: { keepAlive: true }
      },
      {
        path: '/main/mylession',
        name: 'mylession',
        component: MyLession,
        children: [
          {
            path: '/main/mylession',
            redirect: '/main/mylession/1/1/1/video'
          },
          {
            path: '/main/mylession/:lession/:chapter/:section',
            component: ShowContent,
            name: "ShowContent",
            children: [
              {
                path: '/main/mylession/:lession/:chapter/:section/video',
                component: video
              },
              {
                path: '/main/mylession/:lession/:chapter/:section/ppt',
                component: ppt
              },
              {
                path: '/main/mylession/:lession/:chapter/:section/homework',
                component: homework
              },
              {
                path: '/main/mylession/:lession/:chapter/:section/summary',
                component: summary
              }
            ]
          },
        ]
      },
      {
        path: '/main/learn_process',
        component: LearnProcess
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

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/main'
  //   },
  //   {
  //     path: '/login',
  //     component: Login
  //   },
  //   {
  //     path: '/main',
  //     component: Main,
  //     children: [
  //       {
  //         path: '/main',
  //         redirect: '/main/large_model'
  //       },
  //       {
  //         path: '/main/large_model',
  //         component: LargeModel,
  //         meta:{ keepAlive: true}
  //       },
  //       {
  //         path: '/main/mylession',
  //         component: MyLession
  //       },
  //       {
  //         path: '/main/learn_process',
  //         component: LearnProcess
  //       },
  //       {
  //         path: '/main/coder',
  //         component: Coder,
  //         children: [
  //           {
  //             path: '/main/coder',
  //             redirect: '/main/coder/genger-code'
  //           },
  //           {
  //             path: '/main/coder/genger-code',
  //             component: GengerCode
  //           },
  //           {
  //             path: '/main/coder/code-promote',
  //             component: CoderPromote
  //           }
  //         ]
  //       },
  //       {
  //         path: '/main/ranking',
  //         component: Ranking
  //       },
  //       {
  //         path: '/main/mine',
  //         component: Mine
  //       }
  //     ]
  //   },
  //   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  // ]
})

// router.beforeEach((to, from, next) => {
//   if(to.path === "/main/mylession") {
//     formatMyLessionRouteChildren(class_nav, LessionSection, router)
//     next()
//   }
//   next()
// })

router.beforeEach((to, from) => {
  const token = localCache.getStorage('userInfo')
  if (to.path.startsWith('/main') && token === undefined) {
    return '/login'
  }
})

export default router
