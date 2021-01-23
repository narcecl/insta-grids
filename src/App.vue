<template>
	<div id="app" :class="{ dark: $store.getters.getTheme === 'dark' }">
		<appHeader/>

		<section class="seccion">
			<div class="container">
				<dragArea/>
				<postArea/>
			</div>
		</section>

		<appFooter/>
	</div>
</template>

<script>
import appHeader from './components/global/appHeader.vue';
import dragArea from './components/global/dragArea.vue';
import postArea from './components/global/postArea.vue';
import appFooter from './components/global/appFooter.vue';
import darkMode from './components/global/darkMode.vue';

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
			this.$store.commit('toggleTheme', 'dark');
		}
	},
	mounted: function(){
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			if( event.matches ){
				this.$store.commit('toggleTheme', 'dark');
			} else {
				this.$store.commit('toggleTheme', 'light');
			}
		});
	}
}
</script>

<style lang="scss">
</style>