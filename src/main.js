import Vue from 'vue'
import Vuex from 'vuex'
import Grid from 'vue-js-grid'

import App from './App.vue'
import $store from './store'

import "@/assets/scss/main.scss"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Grid)

const store = new Vuex.Store( $store );

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
