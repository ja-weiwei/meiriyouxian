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
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
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
