<template>
	<footer class="app-footer">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<p><span class="fa fa-heart mr-8"></span>Desarrollado por con amor por <a href="https://www.narce.cl" target="_blank">Nicolás Arce</a>.</p>
				</div>
				<div class="col-4 text-center">
					<p><span class="fa fa-coffee mr-8"></span>¿Te gustó la app? <a href="https://ko-fi.com/narcecl" target="_blank">Regalame un café</a>.</p>
				</div>
				<div class="col-4 text-right">
					<p>¿Tuviste algún problema? <a href="#">Reporta un problema</a></p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default{
		name: 'appFooter'
	}
</script>

<style lang="scss" scoped>
	.dark{
		.app-footer{
			border-top-color:#333;
			*{color:#aaa;}
		}
	}

	.app-footer{
		transition: all .3s ease;
		padding:32px 0;
		border-top:1px solid #eee;

		p{
			font-size:13px;
			a{
				font-weight:700;
				color:inherit;
				text-decoration: none;
				&:hover{
					text-decoration:underline;
				}
			}
		}
	}
</style>