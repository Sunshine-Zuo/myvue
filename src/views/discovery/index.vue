<template>
  <div class="container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/banner01.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/banner01.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/banner01.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/banner01.jpg"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Discovery',
  mounted(){
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-pagination {
  position: absolute;
  bottom: 10px;
}

::v-deep .swiper-pagination-bullet {
  width: 20px;
  height: 8px;
  border-radius: 0;
  margin: 0 4px;
  background-color: rgba(255, 255, 255, 0.7);
}

::v-deep .swiper-pagination-bullet-active {
  background-color: rgba(255, 255, 255, 0.9);
}
.container{
  .swiper-container{
    .swiper-wrapper{
      .swiper-slide{
        img{
          display: block;
          width: 100vw;height: 52vw;
        }
      }
    }
  }
}
</style>