<template>
  <div class="addresses-page">
    <van-address-list :switchable="false" :list="list" />
  </div>
</template>

<script>
export default {
  name: 'address-page',
  data() {
    return {
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'sass-bem/bem';
</style>
