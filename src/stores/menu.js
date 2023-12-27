import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuActivar: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    mostrarMenu() {
      this.menuActivar = !this.menuActivar
    },
  },
});
