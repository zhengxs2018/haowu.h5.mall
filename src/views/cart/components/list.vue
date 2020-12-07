<template>
  <div class="cart-list" :class="{ 'is-editing': editable }">
    <template v-if="items.length > 0">
      <template v-if="editable">
        <van-checkbox-group v-model="selection">
          <van-checkbox v-for="(item, index) in items" :name="item.id" :key="item.id">
            <slot v-bind="{ items, item, index }">
              <cart-item :item="item" :key="item.id" />
            </slot>
          </van-checkbox>
        </van-checkbox-group>
      </template>
      <template v-else>
        <template v-for="(item, index) in items">
          <slot v-bind="{ items, item, index }">
            <cart-item :item="item" :key="item.id" />
          </slot>
        </template>
      </template>
    </template>

    <van-empty v-else description="购物车是空的" />
  </div>
</template>

<script lang="ts">
import CartItem from './item.vue'

export default {
  name: 'cart',
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      selection: [],
    }
  },
  components: {
    'cart-item': CartItem,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('list', 'cart') {
  margin-bottom: 16px;
  background-color: #fff;

  .van-card:not(:first-child) {
    margin-top: 0;
  }

  @include is('editing') {
    padding-left: 12px;

    .van-checkbox__label {
      margin-left: 0;
    }
  }
}
</style>
