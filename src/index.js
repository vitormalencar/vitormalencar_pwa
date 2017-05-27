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
			<InfoFooter social={data.social}/>
		</SideNav>
		<MainContent {...data}/>
	</div>
);

const init = () => {
	elem = render(
		<App/>, document.getElementById('root'), elem);
};

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	require('./runtime');
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
	  navigator.serviceWorker.register('/sw.js')
	  .then((reg) => {
	        console.log('🦄 Hey! did you know that this aplications is now ready to work offline?');
	  })
	  .catch((err) => {
	    console.log(err);
	  });
	}
} else {
	// use preact's devtools
	require('preact/devtools');
	// listen for HMR
	if (module.hot) {
		module.hot.accept('./', init);
	}
}
