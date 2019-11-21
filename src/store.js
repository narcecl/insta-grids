export default{
	state: {
		dark: false,
		posts: []
	},
	getters: {
		isDark: function( state ){
			return state.dark;
		},
		getPosts: function( state ){
			return state.posts;
		}
	},
	mutations: {
		toggleDark: function(state){
			state.dark = !state.dark;
		},
		updatePosts: function(state, value){
			console.log(value);
		},
		addPost: function(state, value){
			state.posts.push({image: value});
			console.log('new array =>', state.posts);
		},
		deletePost: function(state, value){
			state.posts.splice(value, 1);
			console.log('new array =>', state.posts);
		}
	}
}