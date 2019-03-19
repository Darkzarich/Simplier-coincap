import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
