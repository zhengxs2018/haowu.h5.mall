<template>
  <!-- 轮播图 -->
  <div class="swipe">
    <div class="swipe-bg"></div>
    <van-swipe>
      <van-swipe-item v-for="item in banners" :key="item.id">
        <div class="item"><img :src="item.img" alt="" /></div>
      </van-swipe-item>
    </van-swipe>
  </div>

  <nav-grid :items="nav" />

  <product-list
    class="similar-list"
    title-class="similar-title"
    :onFetch="handleSimilarFetch"
    @thumb-click="jumpToProduct"
    @title-click="jumpToProduct"
  />
</template>

<script>
import Nav from '/@/components/nav'
import Product from '/@/components/product'

export default {
  name: 'home',
  data() {
    return {
      banners: [
        {
          id: 1,
          img:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/105857/35/7891/217587/5dff642eE80677daf/be4906f2545e19ac.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        },
        {
          id: 2,
          img:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/150324/37/15600/121201/5fbf8ad6Ea98dcd5b/73cca55bf73a615d.jpg!q70.jpg.dpg',
        },
        {
          id: 3,
          img:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/123949/21/19571/201887/5fbc5e57E891c95cc/60780ad8ffcfac37.jpg!q70.jpg.dpg',
        },
      ],
      nav: [
        {
          text: '京东超市',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
          id: 0,
        },
        {
          text: '数码电器',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
          id: 1,
        },
        {
          text: '京东服饰',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp',
          id: 2,
        },
        {
          text: '京东生鲜',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
          id: 3,
        },
        {
          text: '京东到家',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
          id: 4,
        },
        {
          text: '充值缴费',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
          id: 5,
        },
        {
          text: '9.9元拼',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp',
          id: 6,
        },
        {
          text: '领券',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
          id: 7,
        },
        {
          text: '领金贴',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp',
          id: 8,
        },
        {
          text: 'PLUS会员',
          icon:
            'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
          id: 9,
        },
      ],
    }
  },
  methods: {
    jumpToProduct(item) {
      this.$router.push({
        name: 'product',
        params: { id: item.id }
      })
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
    'nav-grid': Nav.Grid,
    'product-list': Product.List,
  },
}
</script>

<style lang="scss">
.van-swipe-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swipe {
  position: relative;
  z-index: 1;
}

.swipe-bg {
  position: absolute;
  top: -25%;
  left: -25%;
  z-index: -1;
  height: 144px;
  width: 150%;
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

.item {
  position: relative;
  z-index: 2;
  padding: 0 12px;
  border-radius: 8px;
  box-sizing: border-box;

  img {
    border-radius: 8px;
  }
}
</style>
