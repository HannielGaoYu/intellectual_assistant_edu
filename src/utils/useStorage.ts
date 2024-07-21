enum storageType {
  local,
  session
}

export class useStorage {
  storage: Storage
  constructor(type: storageType) {
    if(type === storageType.local) {
      this.storage = localStorage
    } else {
      this.storage = sessionStorage
    }
  }

  setStorage(key: string, value: any) {
    if(value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getStorage(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  removeStorage(key: string) {
    if(this.storage.getItem(key)) {
      this.storage.removeItem(key)
    }
  }
}

export const localCache = new useStorage(storageType.local)
export const session = new useStorage(storageType.session)

export default {localCache, session}
