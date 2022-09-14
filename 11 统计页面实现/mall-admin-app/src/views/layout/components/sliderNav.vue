<template>
  <!-- 头部区域 -->
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a-breadcrumb v-if="currentRoute.length > 1">
        <a-breadcrumb-item>{{currentRoute[0]?currentRoute[0].meta.title:''}}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name:currentRoute[1].name}">
            {{currentRoute[1].meta.title}}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <!-- 用户信息 -->
    <ul class="user-info">
      <li class="user-name">
        {{ $store.state.user.username }}
        <a-icon type="down"></a-icon>
      </li>
      <li class="login-out" @click="loginOuthandle">退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
      // console.log(this.$router);
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      // this.collapsed = !this.collapsed;
      this.$store.dispatch('changeCollapsed');
    },
    loginOuthandle() {
      this.$store.dispatch('loginout');
      this.$message.warn('已退出登录');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
