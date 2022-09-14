import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import getMenuRoutes from '../utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);
const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
    },
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: {
          title: '商品列表',
        },
        component: () => import('../views/page/productList.vue'),
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
        },
        component: () => import('../views/page/productAdd.vue'),
      },
      {
        path: 'productCategory',
        name: 'ProductCategory',
        meta: {
          title: '类目管理',
        },
        component: () => import('../views/page/productCategory.vue'),
      },
    ],
  },
];
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // 预加载
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '统计',
        },
        component: () => import('../views/page/index.vue'), // 懒加载
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    // hidden: true,
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});
let isAddRoute = false; // 默认没有添加
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // 去的路径不是登录页面
    if (
      store.state.user.username
      && store.state.user.appkey
      && store.state.user.role
    ) {
      // 有这些 说明是登录状态
      if (!isAddRoute) {
        // 如果没有添加路由
        const menuRoute = getMenuRoutes(store.state.user.role, asyncRouterMap);
        router.addRoutes(menuRoute); // 添加路由
        store.dispatch('changeRoutes', routes.concat(menuRoute));
        isAddRoute = true;
        console.log(menuRoute);
      }
      next();
    } else {
      next('/login');
    } // 不是登录状态
  }
  // 去的是登录页面 那么就直接放行 next
  next();
});

export default router;
