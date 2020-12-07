<template>
  <van-swipe
    class="ux-product-slider"
    :width="screenWidth"
    :height="screenWidth"
    autoplay
    @change="handleSliderChange"
  >
    <van-swipe-item v-for="(img, index) in images" :key="index">
      <img v-lazy="img" alt="轮播图" @click="handleSwipeItemClick(index)" />
    </van-swipe-item>
    <template #indicator>
      <div class="ux-product-slider__indicator">
        <span>{{ swipeActive }}</span>
        <span>/</span>
        <span>{{ images.length }}</span>
      </div>
    </template>
  </van-swipe>

  <slot name="banner"></slot>

  <div class="ux-product">
    <slot name="price-area">
      <div class="ux-product__price-wrap">
        <div class="ux-product__price">
          <slot name="price">
            <price size="large" :value="price" />
          </slot>
        </div>
        <slot name="price-extra"></slot>
      </div>
    </slot>

    <div class="ux-product__title-wrap">
      <div class="ux-product__title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="ux-product__title-extra">
        <slot name="title-extra"></slot>
      </div>
    </div>

    <div v-show="$slots.desc || desc" class="ux-product__desc">
      <slot name="desc">{{ desc }}</slot>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

import Price from '/@/components/price'

export default {
  name: 'preview-preview',
  props: {
    /**
     * 标题
     */
    title: String,
    /**
     * 描述
     */
    desc: String,
    /**
     * 轮播图
     */
    images: {
      type: Array,
      default() {
        return []
      },
    },
    /**
     * 视频
     */
    video: String,
    /**
     * 价格
     */
    price: [Number, String],
  },
  data() {
    this.screenWidth = screen.width

    return {
      swipeActive: 1,
    }
  },
  methods: {
    handleSliderChange(index) {
      this.swipeActive = index + 1
    },
    handleSwipeItemClick(index) {
      ImagePreview({
        images: this.images.reduce((images, item) => {
          if (item.type === 'image') {
            images.push(item.src)
          }
          return images
        }, []),
      })
    },
  },
  components: {
    price: Price,
  },
}
</script>
