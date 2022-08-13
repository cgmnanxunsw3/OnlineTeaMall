<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul class="icons">
    <li v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt="图标" />
      <span>
        {{ item.title }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      iconsList: [
        {
          id: 1,
          title: "茶叶",
          imgUrl: "./images/icons1.png",
        },
        {
          id: 2,
          title: "茶具",
          imgUrl: "./images/icons2.png",
        },
        {
          id: 3,
          title: "买礼盒",
          imgUrl: "./images/icons3.png",
        },
        {
          id: 4,
          title: "领福利",
          imgUrl: "./images/icons4.png",
        },
        {
          id: 5,
          title: "官方认证",
          imgUrl: "./images/icons5.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icons {
  display: flex;
  justify-content: space-around;
  padding: 0.3rem 0;
}
.icons img {
  width: 1.013333rem;
  height: 1.013333rem;
}
.icons span {
  padding: 0.16rem 0;
  font-size: 0.426666rem;
}
.icons li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
