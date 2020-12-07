<template>
  <div v-html="content" class="ux-rich-text" @click="handleClick2"></div>
</template>

<script>
import { ImagePreview } from 'vant'

export default {
  name: 'ux-rich-text',
  props: {
    content: String,
  },
  watch: {
    content() {
      this.images = []
    },
  },
  mounted() {
    this.$el.addEventListener('click', this.handleClick.bind(this))
  },
  methods: {
    getImages() {
      const images = this.images || []
      if (images.length > 0) return images

      const nodeList = this.$el.querySelectorAll('img')
      nodeList.forEach((elm) => {
        if (elm.naturalWidth > 100) {
          const src = elm.src
          if (src) {
            images.push(src)
          }
        }
      })
      this.images = images
    },
    handleClick(event) {
      const elm = event.target
      if (elm.tagName === 'IMG' && elm.naturalWidth > 100) {
        const images = this.getImages()
        const index = images.indexOf(elm.src)
        ImagePreview({
          images: images,
          startPosition: images.indexOf(elm.src),
        })
      }
    },
  },
}
</script>

<style lang="scss">
.ux-rich-text img {
  width: 100%;
  max-width: 100%;
  border: 0;
  outline: 0;
}
</style>
