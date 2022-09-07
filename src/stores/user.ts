import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    account: '',
    password: '',
    isRead: false,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  // actions: {
  //   increment() {
  //     this.counter++
  //   },
  // },
})
