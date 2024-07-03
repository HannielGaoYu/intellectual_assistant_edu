import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    count: 100,
    message: "hello pinia"
  }),
  getters: {
    getCount(): any {
      return this.count
    },
    getMessage():any {
      return this.message
    }
  },
  actions: {
    changeCountAction(value: any) {
      this.count = value
    },
    changeMessageAction(value: any) {
      this.message = value
    }
  }
})
