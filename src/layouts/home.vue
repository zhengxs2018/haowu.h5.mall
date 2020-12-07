<template>
  <slot></slot>

  <van-tabbar class="tabbar" route safe-area-inset-bottom>
    <van-tabbar-item icon="home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
    <van-tabbar-item icon="cart-o" :to="{ name: 'cart' }">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" :to="{ name: 'me' }">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'home-layout',
  data() {
    return {
      active: null,
    }
  },
}
</script>

<style lang="scss">
.ux-page {
  padding-bottom: 50px;
}

.tabbar {
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
</style>
