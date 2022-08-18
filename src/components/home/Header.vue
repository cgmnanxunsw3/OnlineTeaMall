<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <div class="logoindex">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="search">
      <i class="iconfont icon-fangdajing"></i>
      <span>搜您喜欢的...</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 1.6rem;
  background-color: #4f951c;
  /* z-index: 998; */
}
.logoindex {
  padding: 0 0.266666rem;
  width: 3.2rem;
  height: 1.333333rem;
}
.logoindex img {
  width: 100%;
  height: 100%;
}
.search {
  display: flex;
  align-items: center;
  width: 6.56rem;
  height: 0.8rem;
  background-color: #ffffff;
  border-radius: 12px;
}
.search i {
  padding: 0 0.16rem;
  color: #ccc;
}
.search span {
  font-size: 0.373333rem;
  color: #ccc;
}
.kefu i {
  font-size: 0.96rem;
  color: #fff;
}
</style>
