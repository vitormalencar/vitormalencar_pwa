import {h} from 'preact';

const Project = ({name, description, link}) => (
	<div class="main__project">
		<div class="main__project-info">
			<a href={link}>
				<div class="main__project-info-title">{name}</div>
			</a>
			<div class="main__project-description">{description}</div>
		</div>
	</div>
);

export default Project;
