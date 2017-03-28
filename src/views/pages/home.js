import {h} from 'preact';

import data from '../../data.json';
import SideNav from '../../components/SideNav';
import InfoMain from '../../components/InfoMain';
import InfoFooter from '../../components/InfoFooter';
import MainContent from '../../components/MainContent';

const App = () => (
	<div id='page'>
		<SideNav>
			<InfoMain name={data.name} role={data.role} mail={data.mail}/>
			<InfoFooter/>
		</SideNav>
		<MainContent {...data}/>
	</div>
);

export default App;
