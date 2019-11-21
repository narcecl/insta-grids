<template>
	<a href="#" title="Alternar modo oscuro" @click.prevent="toggleDark" :class="{ dark: this.$store.getters.isDark }">
		<span class="fa" :class="classController"></span>
	</a>
</template>

<script>
	export default{
		computed: {
			classController: function(){
				return ( this.$store.getters.isDark ) ? 'fa-sun-o' : 'fa-moon-o';
			}
		},
		methods: {
			toggleDark: function(){
				this.$store.commit('toggleDark');
			}
		}
	}
</script>

<style lang="scss" scoped>
	a{
		position: fixed;
		right: 30px;
		top: 24%;
		padding: 10px;
		border-radius: 100%;
		font-size: 30px;
		transition: all .3s ease;
		background:#333;
		color:#fff;
		width: 50px;
		height: 50px;
		text-align: center;
	}
</style>