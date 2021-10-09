<template>
  <div class="home">
    <div class="head">
      商品
    </div>
    <div class="zunxiang">
      <div class="title">尊享权</div>
      <div class="content" @click="test">
        <img src="../assets/banner01.jpg">
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import {test} from '@/utils/api.js'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  mounted(){
    console.log(11111);
  },
  methods:{
    test(){
      this.$router.push({ name: 'GoodsDetails', params: { type: 'kaquan' }})
    }
  }
}
</script>
<style scoped lang="scss">
  .home{
    width: 100vw;height: 100vh;
    .head{
      height: 60px;
      background-color: #df89cd;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .zunxiang{
      padding: 0 16px;
      box-sizing: border-box;
      .title{
        font-size: 18px;
        font-weight: bold;
        margin: 16px;
        text-align: left;
      }
      .content{
        height: 180px;
        &>img{
         max-height: 100%; 
        }
      }
    }
  }
</style>
