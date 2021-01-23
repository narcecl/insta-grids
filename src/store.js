export default{
	state: {
		theme: 'light',
		posts: []
	},
	getters: {
		getTheme: function( state ){
			return state.theme;
		},
		getPosts: function( state ){
			return state.posts;
		}
	},
	mutations: {
		toggleTheme: function(state, theme = null){
			if( theme ){
				state.theme = theme;
			}
			else{
				state.theme = (state.theme === 'dark') ? 'light' : 'dark';
			}
		},
		updatePosts: function(state, value){
			console.log(value);
		},
		addPost: function(state, value){
			state.posts.push({ image: value });
			console.log('new array =>', state.posts);
		},
		deletePost: function(state, value){
			state.posts.splice(value, 1);
		}
	}
}