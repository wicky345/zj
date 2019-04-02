// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
 import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from './axios/index.js';
Vue.prototype.$api = Api;
Vue.use(ElementUI);
//Vue.use(VueRouter);

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
//const router = new VueRouter({
  // mode: 'history',
   //routes,
 // })
  //Vue.router = router;

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
vm.$mount('#app')