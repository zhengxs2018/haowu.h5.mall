<template>
  <div class="ux-comment-item" :class="{ 'ux-comment-item--abbreviate': abbreviate }">
    <van-cell class="ux-comment-user" :border="false">
      <template #icon>
        <van-image class="ux-comment-user__avatar" :src="avatar" round />
      </template>
      <template #title>
        <span class="ux-comment-user__name">{{ user }}</span>
        <span class="ux-comment-item__rate">
          <van-rate v-model="rate" size="10" allow-half readonly />
        </span>
      </template>
      <template #extra>
        <ux-time class="ux-comment-item__time" :value="date" format="YYYY-MM-DD" />
      </template>
    </van-cell>
    <div class="ux-comment-item__content">{{ content }}</div>
    <div v-show="images.length > 0" class="ux-comment-item__images">
      <van-image
        v-for="(img, index) in images"
        class="img"
        fit="contain"
        lazy-load
        :src="img"
        @click.native="handleImageClick(index)"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

import Time from '../time'

export default {
  name: 'ux-comment-item',
  props: {
    /**
     * 用户头像
     */
    avatar: String,
    /**
     * 评论用户
     */
    user: String,
    /**
     * 评论内容
     */
    content: String,
    /**
     * 评分
     */
    rate: Number,
    /**
     * 上传的图片
     */
    images: {
      type: Array,
      default() {
        return []
      },
    },
    /**
     * 上传的视频
     */
    video: String,
    /**
     * 评论时间
     */
    date: [String, Number, Date],

    abbreviate: Boolean,
  },
  methods: {
    handleImageClick(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
      })
    },
  },
  components: {
    'ux-time': Time,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('comment-item', 'ux') {
  padding-bottom: 10px;

  @include element('title') {
    position: relative;
    padding-left: 8px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 15px;
      background-image: linear-gradient(180deg, #f5503a, #fad1cb);
    }
  }

  @include element('content') {
    margin: 18px 0;
    line-height: 1.5;
    font-size: 13px;
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
  }

  @include element('time') {
    color: #999;
  }

  @include element('images') {
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    overflow-x: auto;

    .img {
      display: inline-block;
      width: 80px;
      height: 80px;
      margin-right: 6px;
      border-radius: 6px;
      background-color: #f3f3f3;
    }
  }

  @include modifier('abbreviate') {
    @include element('content') {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      max-height: 116px;
    }
  }
}

@include component('comment-user', 'ux') {
  @include element('avatar') {
    margin-top: 3px;
    margin-right: 12px;
    width: 20px;
    height: 20px;
  }

  @include element('name') {
    color: #262626;
  }

  @include element('star') {
  }

  @include element('rate') {
  }
}
</style>
