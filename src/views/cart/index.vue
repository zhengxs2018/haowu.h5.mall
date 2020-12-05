<template>
  <van-pull-refresh
    v-model="loading"
    class="cart-page"
    success-text="刷新成功"
    @refresh="handleRefresh"
  >
    <page>
      <van-nav-bar fixed title="购物车" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <span v-if="items.length > 0" class="van-nav-bar__text" @click="handleEdit">
            {{ editing ? '完成' : '编辑' }}
          </span>
        </template>
      </van-nav-bar>

      <list :editable="editing" :items="items" />

      <product-list
        class="similar-list"
        title-class="similar-title"
        :onFetch="handleSimilarFetch"
      />
    </page>
  </van-pull-refresh>

  <van-submit-bar
    class="cart-submit-bar"
    :class="{ 'is-editing': editing }"
    :price="3050"
    :button-type="editing ? 'default' : danger"
    :button-text="editing ? '删除' : `去结算(${selection.length})`"
    @submit="onSubmit"
  >
    <van-checkbox v-model="checked">
      <span>全选</span>
    </van-checkbox>
  </van-submit-bar>
</template>

<script lang="ts">
import Page from '/@/components/page'

import Product from '/@/components/product'

import List from './list.vue'

export default {
  name: 'cart',
  data() {
    return {
      loading: false,
      editing: false,
      items: [
        {
          id: 0,
          thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
          price: 100.0,
        },
        {
          id: 1,
          thumb:
            '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/129687/40/6109/103387/5f2a6145E99f28afa/de7250d6031ec069.jpg!q70.dpg.webp',
          title: '三雄极光 led 灯管支架 t8 灯管 1.2米日光灯空支架长条灯架',
          price: 100.0,
        },
      ],
      selection: [],
    }
  },
  methods: {
    handleRefresh() {
      this.loading = false
    },
    handleEdit() {
      if (this.loading) return

      if (this.editing) {
        this.editing = false
      } else {
        this.editing = true
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
        ],
        end: true,
      }
    },
  },
  components: {
    page: Page,
    list: List,
    'product-list': Product.List,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('page', 'cart') {
  padding-top: 46px;
  padding-bottom: 50px;
}

@include component('nav-bar', 'cart') {
  @include component('nav-bar', 'van') {
    @include element('text') {
      color: #000;
    }
  }
}

@include component('submit-bar', 'cart') {
  bottom: 50px;

  @include is('editing') {
    .van-submit-bar__text {
      font-size: 0;
    }

    .van-submit-bar__price {
      display: none;
    }

    .van-submit-bar__button {
      border: 1px solid #ebedf0;
    }
  }
}
</style>
