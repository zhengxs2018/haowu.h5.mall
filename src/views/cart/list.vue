<template>
  <div class="cart-list" :class="{ 'is-editing': editable }">
    <template v-if="items.length > 0">
      <template v-if="editable">
        <van-checkbox-group v-model="selection">
          <van-checkbox v-for="item in items" :name="item.id" :key="item.id">
            <van-card :title="item.title" :thumb="item.thumb" :price="item.price">
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
          </van-checkbox>
        </van-checkbox-group>
      </template>
      <template v-else>
        <van-card
          v-for="item in items"
          :title="item.title"
          :thumb="item.thumb"
          :price="item.price"
          :key="item.id"
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
      </template>
    </template>

    <van-empty v-else description="购物车是空的" />
  </div>
</template>

<script lang="ts">
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
  methods: {},
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

  @include component('card', 'van') {
    background-color: inherit;
  }
}
</style>
