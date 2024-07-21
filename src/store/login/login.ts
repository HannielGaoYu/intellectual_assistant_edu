import router from '@/router'
import type { IAccount } from '@/type/types'
import { localCache } from '@/utils/useStorage'
import { defineStore } from 'pinia'
import {LOGIN_TOKEN} from '@/global/contsants'
import { accountLoginRequest } from '@/service/login/login'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  code: 0
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    userMenus: {},
    userInfo: {},
    token: localCache.getStorage(LOGIN_TOKEN) ?? '',
    code: 0
  }),
  actions: {
    async loginAccountAction(account: any) {
      //1
      const loginInfo = await accountLoginRequest(account)
      localCache.setStorage('userInfo', loginInfo)
      router.push('/main')
    },

    // loadLocalCacheAction() {
    //   const token = localCache.getStorage(LOGIN_TOKEN)
    //   const userInfo = localCache.getStorage('userInfo')
    //   const userMenus = localCache.getStorage('userMenus')

    //   if (token && userInfo && userMenus) {
    //     this.token = token
    //     this.userInfo = userInfo
    //     this.userMenus = userMenus
    //   }
    // }

  }
})

export default useLoginStore
