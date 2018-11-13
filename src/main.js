import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
var moment = require('moment');

Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.use(Mint)
Vue.filter('datafmt',function (input,fmtstring) {
  // 使用momentjs这个日期格式化类库实现日期的格式化功能
  return moment(input).format(fmtstring);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
