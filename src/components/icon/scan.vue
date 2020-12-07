<template>
  <van-icon
    class="ux-icon-scan"
    :name="icon"
    :class-prefix="iconPrefix"
    @click="handleClick"
  />
  <scan-camera v-model:value="visible"></scan-camera>
  <!-- <scan-camera v-model:value="visible" v-bind="$attrs"></scan-camera> -->
</template>

<script lang="ts">
import { Toast } from 'vant'

import { canIUse } from '/@/system/native'

import Camera from '/@/components/camera'

export default {
  name: 'ux-scan-icon',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: 'scan',
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
    'scan-camera': Camera,
  },
}
</script>
