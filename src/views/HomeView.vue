<template>
  <div class="home">
    <!--     这是首页          -->
    <Header></Header>
    <!-- ly-tab插件 -->
    <ly-tab v-model="selectedId" :items="items" :options="options"> </ly-tab>
    <section>
      <Swiper></Swiper>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/home/Header.vue";
import Swiper from "@/components/home/Swiper.vue";

export default {
  name: "HomeView",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "推荐" },
        { label: "铁观音" },
        { label: "乌龙茶" },
        { label: "红茶" },
        { label: "花茶" },
        { label: "普洱茶" },
        { label: "果茶" },
        { label: "茶具" },
      ],
      options: {
        activeColor: "#4f951c",
      },
    };
  },
  components: {
    Tabbar,
    Header,
    Swiper,
  },
};
</script>

<style scoped>
.ly-tab {
  position: fixed;
  top: 1.6rem;
  left: 0;
}
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
::v-deep .ly-tab-item {
  font-size: 16px;
}
</style>
