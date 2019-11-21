<template>
	<div id="app" :class="{ dark: $store.getters.isDark }">
		<appHeader/>

		<section class="seccion">
			<div class="container">
				<dragArea/>

				<div class="mt-48">
					<postArea/>
				</div>
			</div>
		</section>

		<darkMode/>
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
		appFooter,
		darkMode
	}
}
</script>

<style lang="scss">
</style>