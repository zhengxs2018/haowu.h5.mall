<template>
  <template v-if="chunks.length > 1">
    <van-swipe class="grid">
      <van-swipe-item v-for="(chunk, i) in chunks" :key="i">
        <van-grid
          class="ux-nav-grid"
          :column-num="columnNum"
          icon-size="32"
          :border="false"
          square
        >
          <van-grid-item
            v-for="item in chunk"
            :icon="item.icon"
            :text="item.text"
            :key="item.id"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </template>
  <template v-else>
    <van-grid class="ux-nav-grid" :column-num="columnNum" icon-size="32" :border="false" square>
      <van-grid-item v-for="item in items" :icon="item.icon" :text="item.text" :key="item.id" />
    </van-grid>
  </template>
</template>

<script>
import chunk from 'lodash-es/chunk'

export default {
  name: 'ux-nav-grid',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    columnNum: {
      type: [Number, String],
      default: 5,
    },
  },
  computed: {
    chunks() {
      const items = this.items || {}
      const columnNum = this.columnNum
      const count = columnNum * 2
      return items.length <= count ? [items] : chunk(items, count)
    },
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('nav-grid', 'ux') {
  width: 100%;
  height: 160px;

  @include component('grid-item', 'van') {
    @include element('content') {
      background-color: unset;
    }
  }
}
</style>
