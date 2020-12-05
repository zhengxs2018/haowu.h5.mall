<template>
  <van-icon class="ux-icon-camera" :name="icon" :class-prefix="iconPrefix" @click="handleClick" />
  <camera v-model:value="visible" v-bind="$attrs" v-on="$listeners"></camera>
</template>

<script lang="ts">
import { Toast } from 'vant'

import { canIUse } from '/@/system/native'

import Camera from '/@/components/camera'

export default {
  name: 'ux-icon-camera',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: 'photo-o'
    },
    iconPrefix: String
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    isSupported() {
      return canIUse('mediaDevices.getUserMedia')
    },
  },
  methods: {
    handleClick() {
      if (this.isSupported) {
        this.visible = true
      } else {
        Toast('设备暂不支持此功能～')
      }
    },
  },
  components: {
    camera: Camera,
  },
}
</script>
