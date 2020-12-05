<template>
  <van-search
    v-bind="$attrs"
    v-on="$listeners"
    class="ux-searchbar"
    shape="round"
    clearable
    placeholder="三只松鼠坚果"
  >
    <template #right-icon>
      <icon-scan @on-snap="handleSnap" @on-file="handleFileChange" />
    </template>
  </van-search>
</template>

<script lang="ts">
import { Scan } from '/@/components/icon'

export default {
  name: 'ux-searchbar',
  inheritAttrs: false,
  methods: {
    handleSnap() {
      // pass
    },
    handleFileChange() {
      // pass
    },
  },
  components: {
    'icon-scan': Scan
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('searchbar', 'ux') {
  padding: 0;
  background-color: unset;
}
</style>
