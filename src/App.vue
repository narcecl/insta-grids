<template>
	<div id="app" :class="{ dark: $store.getters.getTheme === 'dark' }">
		<appHeader/>

		<dragArea/>
		<postArea/>

		<appFooter/>
	</div>
</template>

<script>
import appHeader from './components/global/appHeader.vue';
import dragArea from './components/global/dragArea.vue';
import postArea from './components/global/postArea.vue';
import appFooter from './components/global/appFooter.vue';

export default {
	name: 'app',
	components: {
		appHeader,
		dragArea,
		postArea,
		appFooter
	},
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
}
</script>