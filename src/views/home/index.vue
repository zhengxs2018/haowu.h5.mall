<template>
  <van-pull-refresh
    v-model="loading"
    class="index-page"
    :class="{ 'is-fixed': fixed }"
    success-text="刷新成功"
    @refresh="handleRefresh"
  >
    <page :fixed="fixed" :sticky="sticky">
      <template #title>
        <searchbar readonly @focus="handleSearch" />
      </template>
      <template #extra>
        <envelop-icon />
      </template>

      <template #tabs>
        <van-tabs class="index-nav-tabs" v-model:active="nav">
          <van-tab title="首页" name="home"></van-tab>
          <van-tab title="电脑办公"></van-tab>
          <van-tab title="家电"></van-tab>
          <van-tab title="手机"></van-tab>
          <van-tab title="生鲜"></van-tab>
          <van-tab title="玩具乐器"></van-tab>
          <van-tab title="男装"></van-tab>
          <van-tab title="男鞋"></van-tab>
        </van-tabs>
      </template>

      <van-tabs class="index-main-tabs" lazy-render animated ref="tabs">
        <van-tab title="首页" name="home">
          <home />
        </van-tab>
        <van-tab title="分类" name="channel">
          <channel />
        </van-tab>
      </van-tabs>
    </page>
  </van-pull-refresh>
</template>

<script lang="ts">
import Page from '/@/components/page'

import Search from '/@/components/search'
import Icon from '/@/components/icon'

import Home from './home.vue'
import Channel from './channel.vue'

export default {
  name: 'index',
  data() {
    return {
      loading: false,
      fixed: false,
      sticky: 'tabs',
      nav: 'home',
    }
  },
  watch: {
    nav: 'handleNavChange',
  },
  methods: {
    handleRefresh() {
      this.loading = false
    },
    handleNavChange(name: string) {
      const tabs = this.$refs.tabs as any
      if (name === 'home') {
        this.fixed = false
        this.sticky = 'tabs'

        tabs.scrollTo('home')
      } else {
        this.fixed = true
        // @ts-ignore
        this.sticky = false

        tabs.scrollTo('channel')
      }
    },
    handleSearch() {
      this.$router.push({
        name: 'search',
      })
    },
  },
  components: {
    page: Page,
    searchbar: Search.Searchbar,
    home: Home,
    channel: Channel,
    'envelop-icon': Icon.Envelop
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'index') {
  @include is('fixed') {
    height: 100%;
  }

  @include component('page', 'ux') {
    @include element('header') {
      background: #c82519;
    }
  }
}

@include component('nav-tabs', 'index') {
  @include component('tabs', 'van') {
    @include element('nav') {
      background: #c82519;
    }

    @include element('line') {
      background: #c82519;
    }
  }

  @include component('tab', 'van') {
    color: rgba($color: #fff, $alpha: 60%);

    @include modifier('active') {
      color: #fff;
    }
  }
}

@include component('main-tabs', 'index') {
  @include component('tabs', 'van') {
    @include element('wrap') {
      display: none;
    }
  }
}
</style>
