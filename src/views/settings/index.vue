<template>
  <div class="settings-page">
    <van-cell-group>
      <template #title></template>
      <van-cell
        title="个人信息"
        label="头像、昵称、收货地址"
        clickable
        :to="{ name: 'personal' }"
        is-link
      />
      <van-cell
        title="账号与安全"
        label="修改手机号、修改密码、第三方账号管理"
        clickable
        :to="{ name: 'security' }"
        is-link
      />
    </van-cell-group>

    <van-cell-group>
      <template #title></template>
      <van-cell title="支付设置" is-link />
      <van-cell title="消息通知设置" is-link />
      <van-cell title="通用" is-link />
    </van-cell-group>

    <van-cell-group>
      <template #title></template>
      <van-cell title="关于" is-link />
    </van-cell-group>

    <div class="settings-page__footer">
      <van-button type="danger" size="large" block>退出当前账号</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings',
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'settings') {
  @include element('footer') {
    position: fixed;
    left: 0;
    bottom: 36px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
