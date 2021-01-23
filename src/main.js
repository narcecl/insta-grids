import Vue from 'vue'
import Vuex from 'vuex'
// import Grid from 'vue-js-grid'
// import draggable from 'vuedraggable';

import App from './App.vue'
import $store from './store'

import "@/assets/scss/main.scss"

Vue.config.productionTip = false

Vue.use(Vuex);
// Vue.component('draggable', draggable);

const store = new Vuex.Store( $store );

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
