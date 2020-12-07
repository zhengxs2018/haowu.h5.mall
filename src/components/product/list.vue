<template>
  <div class="ux-product-title" :class="titleClass" :style="titleStyle">
    <slot name="title">{{ title }}</slot>
  </div>
  <van-list
    v-model:loading="loading"
    v-bind="$attrs"
    class="ux-product-list"
    :finished="end"
    finished-text="- END -"
    @load="onLoad"
  >
    <van-row gutter="12">
      <van-col v-for="(item, index) in items" span="12" :key="item.id">
        <product-card
          :thumb="item.thumb"
          :price="item.price"
          :onThumbClick="(event) => handleThumbClick(event, item, index)"
          :onTitleClick="(event) => handleTitleClick(event, item, index)"
        >
          <template #title>
            <slot name="title" v-bind="item">
              {{ item.title }}
            </slot>
          </template>
          <template #extra>
            <slot name="extra" v-bind="item"></slot>
          </template>
        </product-card>
      </van-col>
    </van-row>
  </van-list>
</template>

<script lang="ts">
import axios from 'axios'

import { Notify } from 'vant'

import ProductCard from './card'

export default {
  name: 'ux-product-list',
  inheritAttrs: false,
  props: {
    title: String,
    titleStyle: [String, Object, Array],
    titleClass: [String, Object, Array],
    onFetch: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      items: [],
      page: 1,
      end: false,
    }
  },
  methods: {
    handleThumbClick(event: MouseEvent, item: unknown, index: number) {
      event.stopPropagation()
      this.$emit('thumb-click', item, index, this.items)
    },
    handleTitleClick(event: MouseEvent, item: unknown, index: number) {
      event.stopPropagation()
      this.$emit('title-click', item, index, this.items)
    },
    handleAddItemToCart() {},
    async onLoad() {
      const page = this.page + 1
      try {
        this.loading = true
        const res = await Promise.resolve(this.onFetch(page))

        this.items = this.items.concat(res.items || [])
        this.page = page
        this.end = res.end || false
      } catch (err) {
        if (axios.isCancel(err)) return
        Notify({ type: 'danger', message: err.message })
      } finally {
        this.loading = false
      }
    },
  },
  components: {
    'product-card': ProductCard,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('product-title', 'ux') {
  margin-bottom: 6px;
  height: 34px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 0;
  background-size: cover;
}

@include component('product-list', 'ux') {
  @include component('product-card', 'ux') {
    margin-bottom: 12px;
  }
}
</style>
