<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="swiper-cont">
    <swiper :options="swiperOption">
      <!-- 循环取值 -->
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt="tupian" />
      </swiper-slide>
    </swiper>
    <!-- 按需添加组件  swiper-pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 导入插件
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  // name: "vueSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperList: [
        {
          id: 1,
          imgUrl: "./images/swiper1.jpeg",
        },
        {
          id: 2,
          imgUrl: "./images/swiper2.jpeg",
        },
        {
          id: 1,
          imgUrl: "./images/swiper3.jpeg",
        },
      ],
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-cont {
  position: relative;
  width: 100%;
  height: 4.4rem;
  /* margin-top: 3rem; */
}
.swiper-container {
  width: 100%;
  height: 4.4rem;
}
.swiper-cont img {
  width: 100%;
  height: 4.4rem;
}
.swiper-pagination {
  width: 100%;
  bottom: 0px;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: #ffffff;
}
::v-deep .swiper-pagination-bullet {
  margin: 0 0.08rem;
}
</style>
