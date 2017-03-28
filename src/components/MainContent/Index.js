import {h} from 'preact';

import About from '../About';
import Resume from '../Resume';
import Style from './style.scss';
import Projects from '../Projects';
import Achivements from '../Achivements';
import Experiences from '../Experiences';

const MainContent = ({projects, experiences, about,resume}) => (
	<div class="container-main">
		<About about={about}/>
		<Experiences experiences={experiences}/>
		<Projects projects={projects}/>
		<Resume resume={resume}/>
	</div>
);

export default MainContent;
