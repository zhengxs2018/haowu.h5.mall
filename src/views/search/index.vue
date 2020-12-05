<template>
  <van-nav-bar fixed left-arrow @click-left="handleBack">
    <template #title>
      <searchbar />
    </template>
  </van-nav-bar>
</template>

<script lang="ts">
import Search from '/@/components/search'

export default {
  name: 'search-page',
  data() {
    return {}
  },
  methods: {
    handleBack() {
      this.$router.back()
    },
  },
  components: {
    searchbar: Search.Searchbar,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';
</style>
