<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <template #title>
      <top-search />
    </template>
  </van-nav-bar>

  <div class="search-result-page">
    <!-- <van-tabs v-model:active="navTabActive">
      <van-tab title="综合推荐"></van-tab>
      <van-tab title="销量"></van-tab>
      <van-tab title="口碑"></van-tab>
    </van-tabs>

    <van-tabs>
      <van-tab title="结果">
        <van-overlay :show="show" @click="show = false">
          <div class="wrapper" @click.stop>
            <div class="block" />
          </div>
        </van-overlay>
      </van-tab>
      <van-tab title="口碑"></van-tab>
    </van-tabs> -->
  </div>
</template>

<script lang="ts">
import Search from '/@/components/top-search'

export default {
  name: 'search-result-page',
  data() {
    return {
      navTabActive: null,
      show: true
    }
  },
  methods: {},
  components: {
    'top-search': Search,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'search-result') {
  // pass
}
</style>
