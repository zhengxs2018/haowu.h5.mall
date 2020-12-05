<template>
  <teleport to="body">
    <transition name="van-fade">
      <div v-show="visible" class="ux-camera">
        <slot name="header">
          <van-nav-bar
            fixed
            left-arrow
            safe-area-inset-top
            :border="false"
            @click-left="close"
          />
        </slot>
        <slot name="top" />
        <div class="ux-camera__content">
          <video class="ux-camera__video" playsinline ref="video"></video>
          <canvas class="ux-camera__canvas" ref="canvas"></canvas>
          <slot />
        </div>
        <slot name="bottom" />
        <slot name="footer">
          <div class="ux-camera__footer">
            <div class="ux-camera__footer-item">
              <slot name="left-icon">
                <van-icon name="exchange" @click="handleToggleFacingMode" />
              </slot>
            </div>
            <div class="ux-camera__footer-item">
              <div class="ux-camera-snap-button" @click="snap">拍照</div>
            </div>
            <div class="ux-camera__footer-item">
              <slot name="right-icon">
                <van-uploader :after-read="handleFileSelect">
                  <van-icon name="photo-o" />
                </van-uploader>
              </slot>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { Toast, Notify } from 'vant'

import { mediaDevices, screen } from '/@/system/native'

export default {
  name: 'ux-camera',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    facingMode: {
      type: String,
      default: 'environment',
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  provide() {
    return {
      camera: this,
    }
  },
  watch: {
    value: {
      handler(visible) {
        if (visible === this.visible) return
        if (visible) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    },
    visible(visible) {
      if (visible === this.value) return
      this.$emit('update:value', visible)
    },
  },
  methods: {
    async open() {
      const toast = Toast({
        type: 'loading',
        message: '正在打开摄像头',
      })
      this.visible = true

      try {
        const video = this.$refs.video as HTMLVideoElement
        const mediaStream = await mediaDevices.getUserMedia({
          video: {
            width: { min: 1024, ideal: 1280, max: 1920 },
            height: { min: 776, ideal: 720, max: 1080 },
            facingMode: this.facingMode,
          },
        })

        // @ts-ignore
        this.mediaStream = mediaStream

        video.srcObject = mediaStream
        video.play()
      } catch (err) {
        Notify({ type: 'danger', message: '摄像头打开失败' })
      } finally {
        toast.clear()
      }
    },
    async snap() {
      const canvas = this.$refs.canvas as HTMLCanvasElement
      const video = this.$refs.video as HTMLVideoElement

      const videoWidth = video.videoWidth
      const videoHeight = video.videoHeight

      canvas.width = videoWidth
      canvas.height = videoHeight

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight)

      this.$emit('on-snap', canvas.toDataURL('image/png', 1))
      this.close()
    },
    close() {
      const video = this.$refs.video as HTMLVideoElement
      video.pause()
      video.currentTime = 0

      // @ts-ignore
      const mediaStream = this.mediaStream as MediaStream
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop())
      }

      this.visible = false
    },
    lockOrientation() {
      return Promise.all([
        document.body.requestFullscreen(),
        screen.orientation.lock('portrait'),
      ])
    },
    unlockOrientation() {
      screen.orientation.unlock()
    },
    handleToggleFacingMode() {
      // @ts-ignore
      const mediaStream = this.mediaStream as MediaStream
      if (mediaStream) {
        const tracks = mediaStream.getVideoTracks()
        tracks.forEach((track) => {
          const settings = track.getSettings()
          track.applyConstraints({
            facingMode: settings.facingMode === 'user' ? 'environment' : 'user',
          })
        })
      }
    },
    handleFileSelect(data: unknown) {
      this.$emit('on-file', data)
      this.close()
    },
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('camera', 'ux') {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000;

  @include component('nav-bar', 'van') {
    top: 10px;
    z-index: 3;
    background-color: unset;

    @include element('arrow') {
      color: #fff;
      font-size: 24px;
    }
  }

  @include element('content') {
    flex: 1;
    min-height: 100%;
  }

  @include element('video') {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  @include element('canvas') {
    position: relative;
    z-index: -1;
  }

  @include element('footer') {
    position: fixed;
    left: 0;
    bottom: 32px;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @include element('footer-item') {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @include component('icon', 'van') {
      color: #fff;
      font-size: 28px;
    }
  }
}

@include component('camera-snap-button', 'ux') {
  position: relative;
  width: 66px;
  height: 66px;
  line-height: 66px;
  font-size: 0;
  border: 6px solid #fff;
  border-radius: 50%;

  &::before {
    content: ' ';
    position: absolute;
    top: 5px;
    left: 5px;
    display: block;
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>
