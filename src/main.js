// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import moment from 'moment';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store';
import './assets/styles/fonts.css';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.filter('formatDate', value => moment(value).format('MMM DD, YY'));
router.beforeEach((to, from, next) => {
  store.dispatch('loadingOpen');
  next();
});

window.document.title = process.env.WEBSITE_TITLE;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
