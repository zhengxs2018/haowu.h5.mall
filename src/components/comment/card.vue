<template>
  <div class="ux-comment-card">
    <van-cell :border="false" is-link>
      <template #icon>
        <div class="ux-comment-card__title">评价</div>
      </template>
      <template #title>
        <div class="ux-comment-card__total">42万+</div>
      </template>

      <span>好评度 </span>
      <strong>97%</strong>
    </van-cell>
    <div class="ux-comment-card__list">
      <comment-item
        v-for="item in items"
        class="van-hairline--bottom"
        :avatar="item.user.avatar"
        :user="item.user.nickname"
        :images="item.images"
        :rate="item.rate"
        :content="item.content"
        :date="item.publishAt"
        abbreviate
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import Item from './item.vue'

export default {
  name: 'ux-comment-card',
  props: {
    /**
     * 评论类型
     */
    type: {
      type: String,
      default: 'product',
    },
    /**
     * 源 ID
     */
    sourceId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          id: 1,
          user: {
            avatar:
              '//storage.360buyimg.com/i.imageUpload/6a645f4f5874674467766b6348517731353737373233323336323531_sma.jpg',
            nickname: '张三',
          },
          content: `其他特色：这里必须为物流和快递小哥点赞，从下单到收货前后15小时，我网购以来最快的一次。快递小哥在我不方便取货时还给送到楼上，给你们点赞。
      外形外观：非常漂亮，姑娘的高考礼物，颜色超级好看，姑娘喜欢的不得了。
      屏幕音效：屏显效果好，清晰度极高，画面颜色靓丽。
      拍照效果：拍照效果就不用说了，P40PRO的强项就是拍照功能，50倍变焦情况下依然很清晰。
      运行速度：麒麟的芯片运行相当快，支持华为就对了。
      待机时间：待机时间还可以吧，没做具体测试。`,
          rate: 3.5,
          video: null,
          images: [
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
          ],
          publishAt: Date.now(),
        },
        {
          id: 2,
          user: {
            avatar:
              '//storage.360buyimg.com/i.imageUpload/6a645f4f5874674467766b6348517731353737373233323336323531_sma.jpg',
            nickname: '张三',
          },
          content: `其他特色：这里必须为物流和快递小哥点赞，从下单到收货前后15小时，我网购以来最快的一次。快递小哥在我不方便取货时还给送到楼上，给你们点赞。
      外形外观：非常漂亮，姑娘的高考礼物，颜色超级好看，姑娘喜欢的不得了。
      屏幕音效：屏显效果好，清晰度极高，画面颜色靓丽。
      拍照效果：拍照效果就不用说了，P40PRO的强项就是拍照功能，50倍变焦情况下依然很清晰。
      运行速度：麒麟的芯片运行相当快，支持华为就对了。
      待机时间：待机时间还可以吧，没做具体测试。`,
          rate: 3.5,
          video: null,
          images: [
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
            '//img30.360buyimg.com/shaidan/jfs/t1/145835/3/2783/61121/5f0bef23Eeb33fbac/55c447f9dddb6c18.jpg!q70.dpg.webp',
          ],
          publishAt: Date.now(),
        },
      ],
      total: 0,
    }
  },
  components: {
    'comment-item': Item,
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('comment-card', 'ux') {
  padding-bottom: 12px;

  @include element('title') {
    position: relative;
    padding-left: 8px;
    color: #262626;
    font-size: 15px;
    font-weight: 700;

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

  @include element('total') {
    padding-top: 1px;
    padding-left: 8px;
    font-size: 12px;
    font-weight: bold;
  }

  @include element('list') {
    padding: 0 18px;

    .ux-comment-item:last-child::after {
      display: none;
    }
  }
}
</style>
