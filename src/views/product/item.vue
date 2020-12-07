<template>
  <van-pull-refresh v-model="loading" success-text="刷新成功" @refresh="onRefresh">
    <div class="product-page" :class="`scrollTop${scrollTop}`">
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
        class="product-page__content-tabs"
        sticky
        scrollspy
        @change="handleContentTabChange"
        @scroll="handleContentTabScroll"
        ref="contentTab"
      >
        <van-tab name="product" title="宝贝">
          <product
            :images="product.images"
            :title="product.title"
            :desc="product.desc"
            :price="product.price"
          >
          </product>

          <div class="product-floor">
            <van-cell-group class="product-func-list" :border="false">
              <van-cell>
                <template #icon>
                  <div class="label">已选</div>
                </template>
                <template #title> 深海蓝，8GB+256GB，标准版，1个 </template>
                <template #label>本商品支持保障服务、京东服务+，点击可选服务</template>
                <template #right-icon>
                  <i class="more" />
                </template>
              </van-cell>
              <van-cell>
                <template #icon>
                  <div class="label">送至</div>
                </template>
                <template #title>
                  浙江杭州市拱墅区拱宸桥街道小河路小河路363号小区-东1门
                </template>
                <template #right-icon>
                  <i class="more" />
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </van-tab>

        <van-tab name="commit" title="评价">
          <comment-card class="product-floor" type="product" :sourceId="product.id" />
        </van-tab>

        <van-tab name="detail" title="详情">
          <div class="product-floor">
            <rich-text :content="product.content" />
          </div>
          <!-- <van-tabs class="product-floor">
            <van-tab title="商品介绍">
              <rich-text :content="product.content" />
            </van-tab>
            <van-tab title="规则参数"></van-tab>
            <van-tab title="售后保障"></van-tab>
          </van-tabs> -->
        </van-tab>

        <van-tab name="recomm" title="推荐">
          <product-list
            class="similar-list"
            title-class="similar-title"
            :onFetch="handleSimilarFetch"
          />
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
import Product from '/@/components/product'
import Comment from '/@/components/comment'
import RichText from '/@/components/rich-text'

export default {
  name: 'product-page',
  data() {
    return {
      ready: false,
      loading: false,
      navTab: 'product',
      contentTab: 'product',
      scrollTop: 0,
      product: {
        id: 1001,
        images: [
          '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/103830/32/16493/507376/5e7cb589Eda6232e0/b87756fee88912bd.jpg!q80.dpg.webp',
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/86048/39/16563/331375/5e7cb58aE8b819962/673a2f2b82c28546.jpg!q70.dpg.webp',
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/90922/16/16496/244246/5e7cb58bE91056168/fd1d8cfdf6ba1087.jpg!q70.dpg.webp',
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/99460/17/16469/255677/5e7cb58bE3a00faf0/5ea44b4383a1b5cd.jpg!q70.dpg.webp',
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/92780/8/16611/187014/5e7cb58cE301aec9b/cb41a063bca5f385.jpg!q70.dpg.webp',
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/134662/31/8752/39037/5f4e2153E6e1ba4a2/36895d643d80c3a5.jpg!q70.dpg.webp',
        ],
        title: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦',
        desc:
          '现在入手价保12.12!【限时优惠200元】麒麟990芯片；5000万超感知徕卡四摄；50倍数字变焦；华为手机全场至高12期免息',
        price: 6488,
        content: `
        <img
  src="//img30.360buyimg.com/sku/jfs/t1/136147/30/3386/195041/5efc41b9Ef647e851/281ad8e12dddf5d4.jpg!q70.dpg.webp"
/>
<img
  src="//img30.360buyimg.com/sku/jfs/t1/145768/30/1832/109386/5efc41b9Ed6eec267/0dca9c8b6d66c32c.jpg!q70.dpg.webp"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/123331/18/7804/200065/5f19537aE5eec68da/f867c3bd982c3a34.jpg!q70.dpg.webp"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/145650/36/1851/135938/5efc41a2E18bc2a36/cabcc42e54b247df.jpg!q70.dpg.webp"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/122207/12/5921/167749/5efc41d4E943c3825/48048a4adfe37bdd.jpg!q70.dpg.webp"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/128823/15/6093/194695/5efc41d5Edb6a964a/a05f897adf83fd6d.jpg!q70.dpg.webp"
/><img
src="//img30.360buyimg.com/sku/jfs/t1/134812/11/3367/191911/5efc41d5E88898229/ab5c3ff47763b1c6.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/137481/24/3369/190933/5efc41d5E59e12304/242b42b87992d5aa.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/141642/15/1833/188994/5efc41d5E5413ccc7/ad808b1be78982e6.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/138646/37/1857/191166/5efc41d5E89c6c640/77d249b4a1aaec92.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/141222/31/1803/195373/5efc41d5E84209ff4/810f1983c8af2d1e.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/114896/23/11417/190992/5efc41d5Ef0ea8620/18ac7fdf39688a58.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/130348/27/3275/182150/5efc41d5E328e9329/b7a092fba7adc696.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/139399/30/1891/192077/5efc41d5E79ef4e40/f01c5ebefeeb9241.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/125305/31/5879/187292/5efc41d5E81283aea/b5cffbf731712256.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/117750/20/11362/190308/5efc41d5Ec392195e/d6680447d3255117.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/116879/14/11255/195225/5efc41d5E3f8ebf83/ffef15f7f1b6aece.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/148893/1/1783/194742/5efc41d5E096c0064/096c1e160dca0a19.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/129871/25/3386/110951/5efc41d4Ea0be96d4/a8492f1653aba6a3.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/110804/10/13834/194840/5efc41d5Ecd3f8b7a/14c8d806a23b8b1a.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/115038/24/11342/189046/5efc41d5Eaa3eb368/8644854982b82ec0.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/148275/32/1808/193322/5efc41d5E2d042319/d67923a9427e17be.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/117144/7/11301/194166/5efc41d5E81fc09df/3f57309f1c5f8a67.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/145526/17/1770/194211/5efc41d5E6fb2f7b7/fc7473a31122274f.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/140440/19/1838/184671/5efc41d5E03cbad3d/ddeb93f28021d76c.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/142243/34/1868/192892/5efc41d5Ec65eb867/cb2e65826b1cc96e.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/124647/4/5993/192056/5efc41d5Ecf8b663b/7288c32572ac395b.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/114283/11/11196/161923/5efc41d5E259538fb/d1bd0147d497c6dc.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/131459/13/3428/194579/5efc41d5E74ceee1e/bdb197260de45ba2.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/139737/20/1874/194495/5efc41d5E8e87822f/8215a10d2bb931be.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/136987/16/3338/190364/5efc41d5E7ca50810/5096822a7b0c9b67.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/110822/27/13929/148198/5efc41d5E557c2dc9/a1a14771f14ebb47.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/117032/31/11318/192251/5efc4205Eef552ec0/9f74d5e55f4745c1.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/124995/24/6036/191226/5efc4205Ee3717ae6/d85faa8d07402172.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/146415/1/1820/195003/5efc4205E735e186c/fa9956076364bd02.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/124782/37/6159/67009/5efc4205Ee97875ea/dba2fecbb6a46fd7.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/><img
  src="//img30.360buyimg.com/sku/jfs/t1/136930/21/8702/100063/5f49bf56E01241d39/0faf89c981a48336.jpg!q70.dpg.webp"
  src="//wq.360buyimg.com/fd/h5/base/detail/images/transparent_a38f0a03.png"
/>

        `,
      },
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
    handleContentTabScroll({ scrollTop }: any) {
      if (scrollTop < 10) {
        if (this.scrollTop > 0) {
          this.scrollTop = 0
        }
      } else if (scrollTop > 100) {
        if (this.scrollTop < 10) {
          this.scrollTop = 10
        }
      } else {
        this.scrollTop = Math.floor(scrollTop / 10)
      }
    },
    handleSimilarFetch() {
      return {
        items: [
          {
            id: 0,
            thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg',
            title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
            price: 100,
          },
          {
            id: 1,
            thumb:
              '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/129687/40/6109/103387/5f2a6145E99f28afa/de7250d6031ec069.jpg!q70.dpg.webp',
            title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
            price: 100,
          },
          {
            id: 2,
            thumb:
              '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/129687/40/6109/103387/5f2a6145E99f28afa/de7250d6031ec069.jpg!q70.dpg.webp',
            title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
            price: 100,
          },
          {
            id: 3,
            thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg',
            title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
            price: 100,
          },
        ],
        end: true,
      }
    },
  },
  components: {
    product: Product,
    'product-list': Product.List,
    'comment-card': Comment.Card,
    'rich-text': RichText,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'product') {
  padding-bottom: 50px;

  .van-nav-bar,
  .van-tabs__nav {
    background-color: transparent;
  }

  .van-nav-bar .van-tabs {
    opacity: 0;
  }

  .van-nav-bar .van-icon {
    color: #333;
  }

  &.scrollTop1 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .van-nav-bar .van-tabs {
      opacity: 0.1;
    }
  }

  &.scrollTop2 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.2);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.2;
    }
  }

  &.scrollTop3 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.3);
    }

    .van-nav-bar .van-tabs {
      opacity: 0.3;
    }
  }

  &.scrollTop4 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.4);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.4;
    }
  }

  &.scrollTop5 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.5);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.5;
    }
  }

  &.scrollTop6 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.6);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.6;
    }
  }

  &.scrollTop7 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.7);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.7;
    }
  }

  &.scrollTop8 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.8);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.8;
    }
  }

  &.scrollTop9 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 0.9);
    }
    .van-nav-bar .van-tabs {
      opacity: 0.9;
    }
  }

  &.scrollTop10 {
    .van-nav-bar {
      background-color: rgba(255, 255, 255, 1);
    }

    .van-nav-bar .van-tabs {
      opacity: 1;
    }
  }

  &:not(.scrollTop10) {
    .van-nav-bar {
      .van-nav-bar__arrow {
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 20px;
        color: #fff;
        background-color: #666;
      }

      &::after {
        display: none;
      }
    }
  }

  @include element('content-tabs') {
    > .van-tabs__wrap,
    > div > .van-sticky > .van-tabs__wrap {
      display: none;
    }
  }
}

@include component('floor', 'product') {
  margin-top: 12px;
  background-color: #fff;
}

@include component('func-list', 'product') {
  .label {
    width: 35px;
    color: #262626;
    font-weight: 700;
  }

  .more {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIyMjCYmJiYmJi0tLY+PjyYmJidnOsIAAAAGdFJOUwDt6aYcSSEXj/YAAAA8SURBVCjPY2AYBTQBLEbKDhiCTmlpKggeq2AAiDJLS0tGcBkFBUActbS0JAY4F6sgVu1YLcLnpFFAFQAATwgLKVhjC9UAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 20px;
  }

  @include component('cell', 'van') {
    &.service {
      background-color: #fafafa;
    }

    @include element('title') {
      font-size: 13px;
      color: #333;
      line-height: 22px;
    }

    @include element('label') {
      font-size: 13px;
    }
  }
}
</style>
