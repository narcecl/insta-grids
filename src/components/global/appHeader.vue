<template>
	<div class="app-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-8">
					<div class="logo d-flex align-items-center">
						<!-- <span class="fa fa-th isotype"></span> -->
						<h1>Grids <span>planner</span></h1>
						<span>Instagram Feed Planner</span>
					</div>
				</div>
				<div class="col-4">
					<div class="d-flex align-items-center justify-content-end">
						<a href="#" class="btn-ingresar" @click.prevent="openLogin">
							<span class="fa fa-instagram"></span>
							<span class="d-none d-sm-inline-block ml-8">Ingresar con Instagram</span>
						</a>
						<dark-mode/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		data: function(){
			return {
			};
		},
		methods: {
			openLogin: function(){
				this.$store.dispatch('showLogin');
			}
		},
		created: function(){
			this.$axios({
				method: 'post',
				url: 'https://api.instagram.com/oauth/access_token',
				data: {
					client_id: '476586483443014',
					client_secret: '3b211b44e23f75a9f6c546ecee953841',
					code: 'AQD6GxP316gsMj-n8avH5f6mhaTVperzewbHDRNcr6qiTYQjr9WacSDMFeXvbw_1tl5R0C6taJbHzWS7QXh5LcygnvF_Cvywb27rgka4n3qKVsDBWMeyJjDq2K5VblT5fJhLjVjo0v_HtV-drfOg1wlqQaOw9tjXNdtRbkLh855kMvmAO0HJJ2b1v1WloPGYrKjxrLdGOHfkF8JDbAUlHjG88vXKWR3PXDdvC_mv7CYQmA#_',
					grant_type: 'authorization_code',
					redirect_uri: 'https://www.narce.cl/proyectos/grids-planner'
				}  
			})
			.then( response => {
				console.log('response => ', response);
			})
			.catch( error => {
				console.error('error =>', error);
			});
		}
	}
</script>

<style lang="scss" scoped>
	.app-header{
		padding:18px 0;
		background: #333;

		.logo{
			.isotype{
				font-size: 42px;
				margin-right: 12px;
				margin-top: 2px;
				margin-bottom: -6px;
			}

			h1{
				color:#fff;
				font-size: 26px;
				font-weight:700;
				border-right:solid 1px rgba(255,255,255,.5);
				padding-right:20px;
				margin-right:20px;

				span{
					color: #fff;;
					display: block;
					margin-top:2px;
					font-size:16px;
					font-weight: 200;;
				}
			}

			span{
				font-size: 13px;
				color: rgba(255,255,255,.8);
				
			}
		}

		.btn-ingresar{
			// background: rgb(112,59,188);
			// background: linear-gradient(90deg, rgba(112,59,188,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
			background: #555;
			color: #fff;
			border:none;
			padding:10px 18px;
			border-radius: 30px;
			font-size:14px;
			transition: all .3s ease;
			margin-right:32px;
			text-decoration: none;

			&:hover{
				background: #444;
			}
			
			.fa{
				display:inline-block;
				vertical-align: text-bottom;
				font-size:20px;
			}
		}
	}
</style>