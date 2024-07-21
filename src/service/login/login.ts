import Request from '..'
import type { IAccount } from '@/type/types'

export function accountLoginRequest(account: any) {
  return Request.post({
    url: '/users/login',
    data: account
  })
}

// export function getUserInfoById(id: number) {
//   return Request.get({
//     url: `/users/${id}`
//   })
// }

// export function getUserMenusByRoleId(id: number) {
//   return Request.get({
//     url: `/role/${id}/menu`
//   })
// }
