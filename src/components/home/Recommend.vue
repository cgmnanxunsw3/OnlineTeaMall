<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="recommend">
    <!-- 插槽： 火爆推荐 -->
    <Card></Card>
    <ul v-for="(item, index) in recommendList" :key="index">
      <li>
        <div class="backimg">
          <img :src="item.imgUrl" alt="商品图未显示" />
        </div>
        <div class="righttext">
          <h3>{{ item.name }}</h3>
          <p>{{ item.content }}</p>
          <div class="price">
            <span>¥</span>
            <b>{{ item.price }}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  data() {
    return {
      recommendList: [
        {
          id: 1,
          name: "龙井1號铁罐250g",
          content: "鲜爽甘醇 口粮首选",
          price: "68",
          imgUrl: "./images/recommend.jpeg",
        },
        {
          id: 2,
          name: "龙井1號铁罐250g",
          content: "鲜爽甘醇 口粮首选",
          price: "68",
          imgUrl: "./images/recommend.jpeg",
        },
        {
          id: 3,
          name: "龙井1號铁罐250g",
          content: "鲜爽甘醇 口粮首选",
          price: "68",
          imgUrl: "./images/recommend.jpeg",
        },
        {
          id: 4,
          name: "龙井1號铁罐250g",
          content: "鲜爽甘醇 口粮首选",
          price: "68",
          imgUrl: "./images/recommend.jpeg",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.recommend ul li {
  position: relative;
}
.backimg {
  text-align: center;
}
.recommend ul li img {
  width: 9.6rem;
  height: 3.84rem;
  border-radius: 12px;
}
.righttext {
  position: absolute;
  right: 0;
  top: 0;
}
.righttext {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 0.533333rem;
}
.righttext h3 {
  margin-top: 0.2rem;
  font-size: 12px;
}
.righttext p {
  margin-top: 0.1rem;
  font-size: 0.426666rem;
}
.price {
  margin-top: 0.3rem;
  text-align: right;
  color: red;
}
.price span {
  font-size: 0.373333rem;
}
</style>
