import {h} from 'preact'
import {Router} from 'preact-router';

import Home from './pages/home';
import Error404 from './pages/404';

// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url);

export default(
	<Router onChange={onChange}>
		<Home path="/"/>
		<Error404 default/>
	</Router>
);
