import {h} from 'preact';

import Button from '../../components/Button';
import SideNav from '../../components/SideNav';
import InfoMain from '../../components/InfoMain';
import InfoFooter from '../../components/InfoFooter';
import MainContent from '../../components/MainContent';

const App = () => (
	<div>
	<SideNav>
		<InfoMain/>
		<InfoFooter/>
	</SideNav>
	<MainContent/>
	</div>
);

export default App;
