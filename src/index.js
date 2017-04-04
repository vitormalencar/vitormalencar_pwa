import {h, render} from 'preact';

import './index.sass';
import data from './data.json';
import SideNav from './components/SideNav';
import InfoMain from './components/InfoMain';
import InfoFooter from './components/InfoFooter';
import MainContent from './components/MainContent';

let elem;

const App = () => (
	<div id='page'>
		<SideNav>
			<InfoMain name={data.name} role={data.role} mail={data.mail}/>
			<InfoFooter/>
		</SideNav>
		<MainContent {...data}/>
	</div>
);

const init = () => {
	elem = render(
		<App/>, document.getElementById('root'), elem);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker

	if ('serviceWorker' in navigator && location.protocol === 'https:') {
	  navigator.serviceWorker.register('/service-worker.js')
	  .then((reg) => {
	        console.log('🦄 Hey! did you know that this aplications is now ready to work offline?')
	  })
	  .catch((err) => {
	    console.log(err);
	  })
	}
	// add Google Analytics
	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		},
		i[r].l = 1 * new Date();
		a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
	ga('create', 'UA-89577115-1', 'auto');
	ga('send', 'pageview');
} else {
	// use preact's devtools
	require('preact/devtools');
	// listen for HMR
	if (module.hot) {
		module.hot.accept('./', init);
	}
}
