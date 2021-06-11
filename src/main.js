// Dependencias
import Vue from 'vue';
import Vuex from 'vuex';
import "@/assets/scss/main.scss";

// Plugins
import draggable from 'vuedraggable';

// Mixins
import mobile from '@/mixins/mobile';

// App / Store
import App from './App.vue';
import $store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.mixin(mobile);
Vue.component('draggable', draggable);

const store = new Vuex.Store( $store );

new Vue({
	store,
	render: h => h(App),
})
.$mount('#app')
