<template>
  <div class="security-page">
    <van-cell-group>
      <template #title></template>
      <van-cell title="登录密码" is-link> 修改 </van-cell>
      <van-cell title="修改手机号码" is-link> 158****6212 </van-cell>
    </van-cell-group>

    <van-cell-group>
      <template #title></template>
      <van-cell title="微信" is-link> 解绑 </van-cell>
      <van-cell title="QQ" is-link> 绑定 </van-cell>
      <van-cell title="支付宝" is-link> 绑定 </van-cell>
      <van-cell title="微博" is-link> 绑定 </van-cell>
    </van-cell-group>

    <van-cell-group>
      <template #title></template>
      <van-cell title="最近登录记录" is-link>  </van-cell>
      <van-cell title="常见问题" is-link> 绑定 </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'security-page',
}
</script>

<style lang="scss">
@import 'sass-bem/bem';
</style>
