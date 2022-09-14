<template>
  <div class="home">
    <Leftmenu />
    <!-- 主容器区域 -->
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SliderNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Leftmenu from './components/menu.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  components: {
    Leftmenu,
    SliderNav,
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/home.less');
</style>
