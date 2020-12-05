<template>
  <div class="ux-icon-add-cart" @click="handleClick">
    <van-loading v-show="loading" />
    <Icon v-show="!loading" name="cart-o" />
  </div>
</template>

<script lang="ts">
import { Notify } from 'vant'

export default {
  name: 'ux-icon-add-cart',
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async handleClick() {
      if (this.loading) return
      try {
        this.loading = true
        await Promise.resolve(this.onAdd())
        Notify({ type: 'success', message: '添加成功，在购物车等亲～' })
      } catch (err) {
        Notify({ message: '哇哦，失败了呢，请稍后再试~' })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

$ux-icon-cart-add-font-size: 16px !default;
$ux-icon-cart-add-width: 18px !default;

@include component('cart-add', 'ux-icon') {
  position: relative;
  width: $ux-icon-cart-add-width;
  height: $ux-icon-cart-add-width;
  text-align: center;

  @include component('loading', 'van') {
    @include element('spinner') {
      width: $ux-icon-cart-add-width;
      height: $ux-icon-cart-add-width;
    }
  }

  @include component('icon', 'van') {
    font-size: $ux-icon-cart-add-font-size;
    line-height: $ux-icon-cart-add-width;
  }
}
</style>
