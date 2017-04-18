import {h} from 'preact';
import Project from './Project';
import Style from './style.scss';

const Projects = ({projects}) => (
	<div className="main__container-projects">
		<div className="main__tag">Projects</div>
		{projects.map((project) => (<Project {...project}/>))}
	</div>
);

export default Projects;
