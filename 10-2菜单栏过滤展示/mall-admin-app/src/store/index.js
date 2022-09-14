import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookies, getUserCookies, removeUserCookies } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态 false 不闭合 true闭合
    collapsed: false,
    user: getUserCookies(), // 一开始/初始化的时候 就获取cookie
    menuRoute: [], // 存储路由
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    // 退出登录 把用户信息清空
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeRoutes(state, routes) {
      state.menuRoute = routes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    // 设置用户信息的时候 设置cookie
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setUserCookies(userInfo);// 设置cookie
    },
    // 退出登录的时候 删除cookie
    logout({ commit }) {
      commit('logout');
      removeUserCookies();// 退出登录的时候 删除cookie
    },
    changeRoutes({ commit }, routes) {
      commit('changeRoutes', routes);
    },
  },
  modules: {
  },
});
