<template>
	<div class="post-area" :class="{ 'mt-48': postsList.length }">
		<div class="cont" ref="cont">
			<div class="row total mini" v-show="ready">
				<div class="col-4" v-for="(post, index) in postsList" :key="index" draggable @dragstart="dragEvent($event)">
					<div class="grid-item" :style="[sizeController, { backgroundImage: 'url(' + post.image + ')' }]">
						<div class="grid-cont">
							<a href="#" class="delete-item" @click.prevent="confirmDelete(index)">
								<span class="fa fa-trash"></span>
							</a>
						</div>
					</div>
					<p class="text-white text-center mt-4">{{ index }}</p>
				</div>
			</div>
		</div>

		<transition name="fade">
			<div class="prompt" v-if="prompt">
				<div class="h-100 d-flex align-items-center justify-content-center">
					<div class="cont text-center">
						<h6 class="heading-4 text-white">¿Estás seguro que quieres eliminar esta imagen?</h6>
						<p class="f-large text-white">Esta acción no se puede deshacer.</p>

						<div class="btn-holder mt-32">
							<btn @click="deletePost" text="Aceptar"/>
							<btn @click="cancelDelete" text="Cancelar"/>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import btn from './button.vue';

	export default{
		components: {
			btn
		},
		data: function(){
			return {
				prompt: false,
				selected_index: null,
				ready: false,
				items_per_row: 3,
				item_width: null,
				containerWidth: 0
			}
		},
		computed: {
			postsList: function(){
				return this.$store.getters.getPosts;
			},
			sizeController: function(){
				if( this.ready ){
					let item_width = (this.containerWidth / this.items_per_row) - 10;

					return {
						width: item_width > 0 ? item_width + 'px' : false,
						height: item_width > 0 ? item_width + 'px' : false
					};
				}
			}
		},
		methods: {
			confirmDelete: function(index){
				this.selected_index = index;
				this.prompt = true;
			},
			deletePost: function(){
				this.$store.commit('deletePost', this.selected_index);
				this.prompt = false;
				this.selected_index = null;
			},
			cancelDelete: function(){
				this.prompt = false;
				this.selected_index = null;
			},
			changeEvent: function(e){
				console.log('change =>', this.$store.getters.getPosts);
			},
			sortEvent: function(e){
				this.$store.commit('updatePosts', e.items);
			},
			dragEvent: function(){
				console.log('wa');
			},
			dragEnd: function(){
				console.log('end');
			}
		},
		created: function(){
			console.log('created');
			console.log('posts =>', this.$store.getters.getPosts);
		},
		mounted: function(){
			console.log('mounted');
			this.ready = true;
			this.containerWidth = this.$refs.cont.offsetWidth;

			window.addEventListener('resize', () => {
				this.containerWidth = this.$refs.cont.offsetWidth;
			});
		}
	}
</script>

<style lang="scss" scoped>
	.prompt{
		width: 100%;height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.8);
		z-index: 99;
		backdrop-filter: saturate(180%) blur(20px);
	}

	.grid-item{
		cursor: move;
		background-size: cover;
		background-position: center;

		.grid-cont{
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;

			&:hover{
				.delete-item{opacity:1;}
			}

			.delete-item{
				position: absolute;
				right: 10px;
				top: 10px;
				background: rgba(0,0,0,.5);
				z-index: 1;
				padding: 8px;
				color: #fff;
				border-radius: 100%;
				width: 32px;
				height: 32px;
				text-align: center;
				transition: all .3s ease;
				opacity:0;

				&:hover{
					background:rgba(0,0,0,.9);
				}
			}

			img{
				pointer-events: none;
				position: absolute;
				left: -50%;
				top: -50%;
				bottom: -50%;
				right: -50%;
				margin: auto;
			}
		}
	}
</style>