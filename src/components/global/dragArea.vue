<template>
	<div class="drag-area">
		<label for="images">
			<div class="drag-cont">
				<span class="fa fa-picture-o"></span>
				<h2 class="mb-8">Selecciona tus imágenes</h2>
				<p class="w-100 center">Arrastra tus imágenes para organizarlas o haz click aquí para buscarlas entre tus archivos.</p>
			</div>
			<input type="file" name="images" id="images" ref="file" @change="handleFile">
		</label>
	</div>
</template>

<script>
	export default{
		name: 'dragArea',
		data: function(){
			return {
				url: null
			};
		},
		methods: {
			handleFile: function(e){
				let file = e.target.files[0];
				this.$store.commit('addPost', URL.createObjectURL(file));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dark{
		.drag-area{
			.drag-cont{
				background:#333;
				*{color:#fff;}
			}
		}
	}

	.drag-area{
		.drag-cont{
			text-align: center;
			padding:32px;
			border-radius:16px;
			background:#efefef;
			position:relative;
			transition:all .3s ease;
			border:2px solid transparent;

			&.active, &:hover{
				border-color: rgba(195, 224, 251, .5);
				background: rgba(195, 224, 251, .2);
			}
			*{transition: all .3s ease;}
			h2{font-size:18px;color:#333;}
			span{font-size:38px;display:block;margin-bottom:24px;color:#555;}

			.btn-importar{background: #3897f0;padding: 12px 32px;border-radius: 36px;font-size: 13px;color: #fff;text-transform: uppercase;}
		}
		label{
			cursor:pointer;
			display:block;
			width:100%;

			input{
				width:0;
				height:0;
				position:absolute;
			}
		}
	}
</style>