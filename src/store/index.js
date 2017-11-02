import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
// import { sync } from 'vuex-router-sync';
// import router from '@/router';
import storeModules from './modules';
import * as types from './modules/auth/types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexLocalStorage = new VuexPersist({
  key: 'auth',
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth,
  }),
  filter: mutation => mutation.type === types.LOGIN_SUCCESS || mutation.type === types.LOGOUT,
});

const store = new Vuex.Store({
  modules: storeModules,
  strict: debug,
  plugins: debug ? [vuexLocalStorage.plugin] : [vuexLocalStorage.plugin],
});

// sync(store, router, { moduleName: 'routerModule' });

export default store;
