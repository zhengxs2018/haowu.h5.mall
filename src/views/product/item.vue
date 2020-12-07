<template>
  <van-pull-refresh v-model="loading" success-text="刷新成功" @refresh="onRefresh">
    <div class="product-page">
      <van-nav-bar left-arrow fixed @click-left="$router.back()">
        <template #title>
          <van-tabs v-model:active="navTab" @change="handleNavTabChange" ref="navTab">
            <van-tab name="product" title="宝贝"></van-tab>
            <van-tab name="commit" title="评价"></van-tab>
            <van-tab name="detail" title="详情"></van-tab>
            <van-tab name="recomm" title="推荐"></van-tab>
          </van-tabs>
        </template>
      </van-nav-bar>

      <van-tabs
        v-model:active="contentTab"
        class="product-page__tabs"
        scrollspy
        @change="handleContentTabChange"
        ref="contentTab"
      >
        <van-tab name="product" title="宝贝">
          <!-- 轮播图 S -->
          <van-swipe>
            <van-swipe-item>
              <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="" />
            </van-swipe-item>
          </van-swipe>
          <!-- 轮播图 E -->

          <!-- 活动价格信息 S -->
          <!-- 活动价格信息 E -->

          <!-- 商品信息 S -->
          <section>
            <div>价格区域</div>
            <div>
              点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
            </div>
            <div>商品特色</div>
          </section>
          <!-- 商品信息 E -->

          <!-- 优惠券领取 & 信息活动 S -->
          <div>
            <div>优惠</div>
            <div>活动</div>
          </div>
          <!-- 优惠券领取 & 信息活动 E -->

          <!-- 已选 SKU & 快递信息 S -->
          <div>
            <div>已选</div>
            <div>送至</div>
            <div>运费</div>
            <div>运费模板</div>
          </div>
          <!-- 已选 SKU & 快递信息 E -->

          <!-- 同类商品排行榜 S -->
          <div>同类商品排行榜</div>
          <!-- 同类商品排行榜 E -->
        </van-tab>

        <van-tab name="commit" title="评价">
          <section style="height: 200px">评价</section>
          <section style="height: 120px">问答</section>
        </van-tab>

        <van-tab name="detail" title="详情">
          <section>
            商品详情
            <div>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
              <p>
                点点 led灯泡e27螺口节能灯泡大功率光源家用商用车间工厂照明超亮球泡灯 30w 白光
              </p>
            </div>
          </section>

          <section style="height: 120px">服务</section>
        </van-tab>

        <van-tab name="recomm" title="推荐">
          <section>
            <section style="height: 120px">推荐</section>
          </section>
        </van-tab>
      </van-tabs>
    </div>
  </van-pull-refresh>

  <van-action-bar safe-area-inset-bottom>
    <van-action-bar-icon icon="chat-o" text="客服" dot />
    <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script lang="ts">
export default {
  name: 'product-item-page',
  data() {
    return {
      ready: false,
      loading: false,
      navTab: 'product',
      contentTab: 'product',
    }
  },
  methods: {
    onRefresh() {
      this.loading = false
    },
    handleNavTabChange(name: string) {
      if (this.contentTab === name) return
      const tab = this.$refs.contentTab as any
      tab.scrollTo(name)
    },
    handleContentTabChange(name: string) {
      if (name === this.navTab) return
      const tab = this.$refs.navTab as any
      tab.scrollTo(name)
    },
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'product') {
  padding-top: 46px;
  padding-bottom: 50px;

  @include element('tabs') {
    .van-tabs__wrap {
      display: none;
    }
  }
}
</style>
