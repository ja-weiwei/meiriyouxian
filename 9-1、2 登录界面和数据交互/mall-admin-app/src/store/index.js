import Vue from 'vue';
import Vuex from 'vuex';
import {
  setUserCookie,
  getUserCookie,
  removeUserCookie,
} from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态，false 代表不闭合 true 代表闭合
    collapsed: false,
    // 用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
      // console.log(state.collapsed);
    },
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    // 退出登录
    loginout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setUserCookie(userInfo);
    },
    loginout({ commit }) {
      commit('loginout');
      removeUserCookie();
    },
  },
  modules: {},
});
