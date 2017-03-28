import {h} from 'preact';

const Experience = ({name, link, description,tag}) => (
	<div class={tag}>
		<div class="main__experience-title">
			<a href={link}>{name}</a>
		</div>
		<div class="main__experience-description">{description}</div>
	</div>
);

export default Experience;
