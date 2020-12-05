<template>
  <page class="me-page">
    <div class="me-page__header">
      <div class="me-user">
        <div class="me-avatar">
          <van-image src="/images/avatar.png" round />
          <div class="me-avatar__decoration"></div>
        </div>
        <div class="me-personal">
          <router-link class="me-personal__name van-ellipsis" :to="{ name: 'me-personal' }">
            非数字党
          </router-link>
        </div>
      </div>
      <router-link class="me-settings" :to="{ name: 'settings' }">
        <van-icon name="setting-o" />
      </router-link>

      <div class="o-statistics">
        <van-grid :column-num="3" center :border="false">
          <van-grid-item text="商品收藏">
            <template #icon> 1 </template>
          </van-grid-item>
          <van-grid-item text="店铺收藏">
            <template #icon> 9 </template>
          </van-grid-item>
          <van-grid-item text="我的足迹">
            <template #icon> 3 </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <div class="o-functional me-order">
      <van-grid center :border="false">
        <van-grid-item icon="credit-pay" text="待付款" />
        <van-grid-item icon="tosend" text="待收货" />
        <van-grid-item icon="cash-on-deliver" text="退换 / 售后" />
        <van-grid-item icon="orders-o" text="全部订单" />
      </van-grid>
    </div>

    <div class="o-functional me-assets">
      <van-grid center :border="false">
        <van-grid-item text="金豆">
          <template #icon> 19,649 </template>
        </van-grid-item>
        <van-grid-item text="红包">
          <template #icon> 9个 </template>
        </van-grid-item>
        <van-grid-item text="代金券">
          <template #icon> 9张 </template>
        </van-grid-item>
        <van-grid-item icon="orders-o" text="我的资产"> </van-grid-item>
      </van-grid>
    </div>

    <product-list
      class="similar-list"
      title-class="similar-title"
      :onFetch="handleSimilarFetch"
    />
  </page>
</template>

<script lang="ts">
import Page from '/@/components/page'

import Product from '/@/components/product'

export default {
  name: 'me',
  data() {
    return {}
  },
  methods: {
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
        ],
        end: true,
      }
    },
  },
  components: {
    page: Page,
    'product-list': Product.List,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'me') {
  @include element('header') {
    position: relative;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 10px;
    color: #fff;
    background: url(../../assets/images/bg-me-header.png) no-repeat scroll 0 0 / cover;
    overflow: hidden;
    box-sizing: border-box;
  }
}

@include component('user', 'me') {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0 18px 18px;
}

@include component('avatar', 'me') {
  position: relative;
  flex-shrink: 0;

  @include component('image', 'van') {
    width: 52px;
    height: 52px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    border: 1px solid #fff;
    transform: translateZ(0);
    box-sizing: border-box;
  }

  @include element('decoration') {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 0;
    top: -4px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: 50%;
  }
}

@include component('personal', 'me') {
  flex: 1;
  position: relative;
  padding: 0 0 0 15px;

  @include element('name') {
    color: #fff;
    font-size: 18px;
  }
}

@include component('settings', 'me') {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 22px;
  color: #fff;
}

@include object('statistics') {
  @include component('grid', 'van') {
    padding-left: 14px;
    padding-right: 14px;
  }

  @include component('grid-item', 'van') {
    padding-bottom: 10px;

    @include element('content') {
      padding: 0;
      background-color: unset;
    }

    @include element('text') {
      font-size: 12px;
      color: #fff;
    }

    @include component('badge', 'van') {
      @include element('wrapper') {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
}

@include object('functional') {
  margin-bottom: 16px;
  padding: 16px 0 10px;
  background-color: #fff;
  border-radius: 12px;

  @include component('grid-item', 'van') {
    @include element('content') {
      padding: 0;
    }
  }
}

@include component('order', 'me') {
  position: relative;
  margin-top: -10px;
  padding-top: 20px;
}

@include component('assets', 'me') {
  @include component('badge', 'van') {
    @include element('wrapper:not(.van-icon)') {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
}
</style>
