import {h} from 'preact';
import Project from './Project';
import Style from './style.scss';

const Projects = ({projects}) => (
	<div class="main__container-projects">
		<div class="main__tag">Projects</div>
		{projects.map((project) => (<Project {...project}/>))}
	</div>
);

export default Projects;
