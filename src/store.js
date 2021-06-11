export default{
	state: {
		theme: 'light',
		posts: []
	},
	getters: {
		getTheme: function( state ){
			// Devuelve el tema (Claro/Oscuro)
			return state.theme;
		},
		getPosts: function( state ){
			// Devuelve array de posts
			return state.posts;
		}
	},
	mutations: {
		toggleTheme: function(state, theme = null){
			if( theme ) state.theme = theme;
			else state.theme = (state.theme === 'dark') ? 'light' : 'dark';
		},
		addPost: function(state, value){
			// Añade un post desde el dragArea al state
			let image = { image: value };

			if( !state.posts.length ){
				// Si no hay posts, agregamos con push
				state.posts.push(image);
			}
			else{
				// Si hay posts agregamos al principio del array
				state.posts.splice(0, 0, image);
			}
		},
		deletePost: function(state, value){
			// Eliminamos un posts del array
			state.posts.splice(value, 1);
		},
		updatePostsList: function(state, value){
			// Actualizamos la lista de posts desde el postsArea (vuedraggable)
			state.posts = value;
		}
	}
}