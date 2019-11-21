<template>
	<a href="#" @click="func">
		<span class="fa" :class="'fa-' + icon" v-if="icon"></span>
		{{ text }}
	</a>
</template>

<script>
	export default{
		name: 'boton',
		props: {
			text: { type: String, default: '' },
			icon: { type: [String, Boolean], default: false },
			func: { type: Function, default: () => { return false } }
		}
	}
</script>

<style lang="scss" scoped>
	a{
		display:inline-block;
		font-size:14px;
		text-decoration: none;

		.fa{
			margin-right:4px;
			vertical-align:middle;
		}
	}
</style>