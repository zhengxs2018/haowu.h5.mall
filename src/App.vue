<template>
  <!-- 路由视图 S -->
  <router-view v-slot="{ Component }">
    <layout :layouts="layouts">
      <template v-if="requiresCache">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </template>
      <template v-else>
        <component :is="Component" />
      </template>
    </layout>
  </router-view>
  <!-- 路由视图 E -->
  <!-- SKU 选择器 S -->
  <!-- SKU 选择器 E -->
</template>

<script lang="ts">
import Layout from './components/layout'

import HomeLayout from './layouts/home.vue'

export default {
  name: 'App',
  data() {
    // @ts-ignore
    this.layouts = {
      home: HomeLayout,
    }
    return {}
  },
  computed: {
    requiresCache() {
      return this.$route.meta.cache === true
    },
  },
  components: {
    layout: Layout,
  },
}
</script>
