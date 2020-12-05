<template>
  <slot></slot>

  <van-tabbar class="tabbar" route safe-area-inset-bottom>
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item name="me" icon="friends-o" to="/me">我的</van-tabbar-item>
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
