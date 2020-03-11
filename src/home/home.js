import Vue from 'vue'
import Home from './home.vue'
//完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
Vue.use(L);

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),//Home为导入组件'./home.vue'时取的别名
}).$mount('#home')//home为./public/home/home.html中的id号
