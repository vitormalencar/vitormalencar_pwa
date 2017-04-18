import {h} from 'preact';

const Project = ({name, description, link}) => (
	<div className="main__project">
		<div className="main__project-info">
			<a href={link}>
				<div className="main__project-info-title">{name}</div>
			</a>
			<div className="main__project-description">{description}</div>
		</div>
	</div>
);

export default Project;
