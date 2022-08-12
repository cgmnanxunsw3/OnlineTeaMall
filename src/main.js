import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 公共css文件
import "@/assets/css/common.css";
// 淘宝无线适配js文件
import "@/assets/js/flexible";
// 字体图标css文件引入
import "@/assets/css/iconfont.css";
// 全局注册 ly-tab
import LyTab from "ly-tab";
Vue.use(LyTab);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
