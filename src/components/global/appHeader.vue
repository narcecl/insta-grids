<template>
	<div class="app-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-8">
					<div class="mark-content">
						<h1>Grids</h1>
						<span>Feed Planner</span>
					</div>
				</div>
				<div class="col-4 text-right">
					<darkMode/>
				</div>
				<!-- <div class="col-6 text-right">
					<button class="btn-ingresar" text="Ingresar con Instagram" icon="instagram" :func="openLogin"/>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	// import button from './button.vue';
	import darkMode from './darkMode.vue';

	export default{
		name: 'appHeader',
		components: {
			// button,
			darkMode
		},
		methods: {
			openLogin: function(){
				alert('wa');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-header{
		padding:18px 0;
		background: #333;

		.mark-content{
			> *{display:inline-block;vertical-align:middle;}
			h1{
				color:#fff;
				font-size: 28px;
				font-weight:700;
				border-right:solid 1px rgba(255,255,255,.5);
				padding-right:12px;
				margin-right:12px;
			}

			span{
				font-size:13px;
				color: rgba(255,255,255,.8);
				
			}
		}

		.btn-ingresar{
			color: #fff;
			border:solid 1px #fff;
			padding:10px 18px;
			border-radius: 30px;
			font-size:12px;
			transition: all .3s ease;
			
			.fa{
				font-size:16px !important;
			}

			&:hover{
				background:#fff;
				color:#333;
			}
		}
	}
</style>