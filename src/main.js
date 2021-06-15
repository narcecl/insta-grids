// Dependencias
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import "@/assets/scss/main.scss";

// Plugins
import draggable from 'vuedraggable';
import axios from 'axios';
import $store from './store';
import $routes from './routes';

// Mixins
import mobile from '@/mixins/mobile';

// Components
import appHeader from './components/global/appHeader.vue';
import dragArea from './components/global/dragArea.vue';
import postArea from './components/global/postArea.vue';
import appFooter from './components/global/appFooter.vue';
import darkMode from './components/global/darkMode.vue';

const $config = {
	install( Vue ){
		// Prototypes
		Vue.prototype.$axios = axios;

		// Mixins
		Vue.mixin(mobile);

		// Component
		Vue.component('main-header', appHeader);
		Vue.component('main-footer', appFooter);
		Vue.component('drag-area', dragArea);
		Vue.component('post-area', postArea);
		Vue.component('draggable', draggable);
		Vue.component('dark-mode', darkMode);
	}
}

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use($config);

const store = new Vuex.Store($store);
const router = new VueRouter($routes);

const main = new Vue({
	el: '#app',
	router,
	store,
	created: function(){
		if( window.matchMedia('(prefers-color-scheme: dark)').matches ){
			// Tiene el modo oscuro activado por OS
			this.$store.commit('toggleTheme', 'dark');
		}
	},
	mounted: function(){
		// Evento para verificar si se cambia el tema del OS
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			if( event.matches ){
				// Si tiene el modo oscuro, lo cambiamos
				this.$store.commit('toggleTheme', 'dark');
			} else {
				// Si tiene el modo claro, lo cambiamos
				this.$store.commit('toggleTheme', 'light');
			}
		});
	}
});