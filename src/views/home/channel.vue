<template>
  <product-list title-class="similar-title" :onFetch="handleSimilarFetch" />
</template>

<script>
import Product from '/@/components/product'

export default {
  name: 'channel',
  methods: {
    handleSimilarFetch() {
      return {
        items: [
          {
            id: 0,
            thumb:
              '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/129687/40/6109/103387/5f2a6145E99f28afa/de7250d6031ec069.jpg!q70.dpg.webp',
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
    'product-list': Product.List,
  },
}
</script>

<style lang="scss">
.similar-list {
  padding: 0 12px;
}
</style>
