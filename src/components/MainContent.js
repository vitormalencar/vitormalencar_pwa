import {h} from 'preact';

import About from './About';
import Projects from './Projects';
import Experiences from './Experiences';

const MainContent = () => (
	<div class="container-main">
    <About/>
    <Experiences/>
		<Projects/>
  </div>
);

export default MainContent;
