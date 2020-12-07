<template>
  <van-swipe-cell class="cart-item">
    <van-card
      :title="item.title"
      :thumb="item.thumb"
      :price="item.price"
    >
      <template #num>
        <van-stepper
          v-model="item.num"
          min="1"
          async-change
          integer
          input-width="20px"
          button-size="16px"
        />
      </template>
    </van-card>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts">
export default {
  name: 'cart',
  props: {
    item: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('item', 'cart') {
  .delete-button {
    height: 100%;
  }

  @include component('card', 'van') {
    background-color: inherit;
  }
}
</style>
