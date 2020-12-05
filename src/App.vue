<template>
  <router-view v-slot="{ Component }">
    <layout :layouts="layouts">
      <template v-if="requiresCache">
        <component :is="Component" />
      </template>
      <template v-else>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </template>
    </layout>
  </router-view>
</template>

<script lang="ts">
import Layout from './components/layout'

import HomeLayout from './layouts/home.vue'

export default {
  name: 'App',
  computed: {
    layouts() {
      return {
        home: HomeLayout,
      }
    },
    requiresCache() {
      return this.$route.meta.cache === true
    },
  },
  components: {
    layout: Layout,
  },
}
</script>
