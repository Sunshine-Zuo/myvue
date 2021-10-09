<template>
  <div class="goods-details">
    <div class="head">
      <van-icon class="left-icon" size="24" name="arrow-left" @click="goback" />
      商品详情
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import {test} from '@/utils/api.js'
export default {
  name: 'GoodsDetails',
  components: {
    // HelloWorld
  },
  mounted(){
    const params = this.$route.params
    let type = params.type
    console.log(22222);
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss">
  .goods-details{
    width: 100vw;height: 100vh;
    .head{
      position: relative;
      height: 60px;
      background-color: #df89cd;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      .left-icon{
        position: absolute;
        left: 16px;
      }
    }
  }
</style>
