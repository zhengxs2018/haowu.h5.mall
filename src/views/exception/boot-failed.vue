<template>
  <div class="boot-failed-page">
    <van-empty image="error" description="网络请求失败">
      <van-button round type="danger"> 重新加载 </van-button>
    </van-empty>
  </div>
</template>

<script lang="ts">
export default {
  name: 'boot-failed-page',
  methods: {
    reload() {
      window.location.reload()
    },
  },
}
</script>

<style lang="scss">
.boot-failed-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
