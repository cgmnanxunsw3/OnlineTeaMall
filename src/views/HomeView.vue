<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <!--     这是首页          -->
        <Header></Header>
        <!-- ly-tab插件 -->
        <ly-tab v-model="selectedId" :items="items" :options="options">
        </ly-tab>
      </div>
    </div>
    <!-- <section>
      <Swiper></Swiper>
      <Icons></Icons>
      <Recommend></Recommend>
    </section> -->
    <section ref="wrapper">
      <div>
        <div v-for="(item, index) in newData" :key="index">
          <Swiper
            v-if="item.type == 'swiperList'"
            :swiperList="item.data"
          ></Swiper>

          <Icons v-if="item.type == 'iconsList'" :iconsList="item.data"></Icons>

          <Recommend
            v-if="item.type == 'recommendList'"
            :recommendList="item.data"
          ></Recommend>

          <Ad v-if="item.type == 'adList'" :adList="item.data"></Ad>

          <Like v-if="item.type == 'likeList'" :likeList="item.data"></Like>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/home/Header.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
import Recommend from "@/components/home/Recommend.vue";
//引入better-scroll 插件
import BetterScroll from "better-scroll";
import axios from "axios";
import Like from "@/components/home/Like.vue";
import Ad from "@/components/home/Ad.vue";

export default {
  name: "HomeView",
  data() {
    return {
      selectedId: 0,
      items: [],
      // { label: "首页" },
      // { label: "推荐" },
      // { label: "铁观音" },
      // { label: "乌龙茶" },
      // { label: "红茶" },
      // { label: "花茶" },
      // { label: "普洱茶" },
      // { label: "果茶" },
      // { label: "茶具" },

      options: {
        activeColor: "#4f951c",
      },
    };
  },
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad,
  },
  created() {
    this.getData();
  },
  mounted() {
    new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
    });
  },
  methods: {
    async getData() {
      let res = await axios({
        url: "/api/index_list/0/data/1",
      });

      this.items = Object.freeze(res.data.data.topBar);
      this.newData = Object.freeze(res.data.data.data);
    },
    async addData(index) {
      let res = await axios({
        url: "/api/index_list/" + index + "/data/1",
      });

      if (res.data.data.constructor != Array) {
        this.newData = res.data.data.data;
      } else {
        this.newData = res.data.data;
      }
    },
    changeTab(item, index) {
      this.addData(index);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
/* .ly-tab {
  position: fixed;
  top: 1.6rem;
  left: 0;
} */
.headers {
  width: 100%;
  height: 2.88rem;
}
.headers-main {
  position: fixed;
  left: 0;
  top: 0;
}
section {
  flex: 1;
  overflow: hidden;
}
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
::v-deep .ly-tab-item {
  font-size: 16px;
}
</style>
