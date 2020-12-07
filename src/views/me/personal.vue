<template>
  <div class="personal-page">
    <van-cell-group>
      <template #title></template>
      <van-cell title="头像" is-link> 头像 </van-cell>
      <van-cell title="昵称" is-link> 非数字党 </van-cell>
      <van-cell title="生日" is-link> 1993-01-20 </van-cell>
      <van-cell title="收货地址"

        clickable
        :to="{ name: 'address' }"
        is-link> 修改/添加 </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'personal-page',
}
</script>

<style lang="scss">
@import 'sass-bem/bem';
</style>
