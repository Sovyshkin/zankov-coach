import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: 'ZankovCoach',
    version: '1.0.0',
    isLoading: false,
  }),
  
  getters: {
    appInfo: (state) => `${state.appName} v${state.version}`,
  },
  
  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading;
    },
    
    updateAppName(name: string) {
      this.appName = name;
    },
  },
});