// Pages
import home from './views/home';
import connect_success from './views/connect_success';

export default{
	mode: 'history',
	routes: [
		{ path: '', component: home },
		{ path: '/connect_success', component: connect_success }
	]
}