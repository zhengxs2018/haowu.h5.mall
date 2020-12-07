<template>
  <page class="trade-confirm-page">
    <van-nav-bar  left-arrow fixed title="填写订单" @click-left="$router.back()" />

    <!-- 选择收货地址 S -->
    <!-- 选择收货地址 E -->

    <!-- 普通商品列表 & 活动商品列表 S -->
    <!-- 配送时间选择（仅单个） -->
    <!-- 蜂巢快递柜 -->
    <!-- 退换无忧保障 -->
    <!-- 留言 -->
    <!-- 普通商品列表 & 活动商品列表 E -->

    <!-- 商品金额 -->
    <!-- 退换无忧 -->
    <!-- 运费 -->
    <!-- 优惠券 -->
    <!-- 金豆 -->
    <!-- 礼品卡 -->
    <!-- 发票 -->
    <!-- 支付方式 -->
  </page>

  <van-submit-bar class="trade-confirm-submit-bar" :price="3050" button-text="提交订单">
  </van-submit-bar>
</template>

<script lang="ts">
import Page from '/@/components/page'

export default {
  name: 'cart',
  data() {
    return {}
  },
  methods: {},
  components: {
    page: Page,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';
</style>
