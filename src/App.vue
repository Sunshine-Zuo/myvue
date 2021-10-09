<template>
  <div id="app">
    <router-view/>
    <div v-if="loading" class="loading-mask"><van-loading class="loading" color="#ff0000" /></div>
  </div>
</template>
<script>
export default {
  computed:{
    loading(){
      return this.$store.state.loading
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size: 16px;
  .loading-mask{
    position: absolute;
    left: 0;top: 0;
    right: 0;bottom: 0;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
