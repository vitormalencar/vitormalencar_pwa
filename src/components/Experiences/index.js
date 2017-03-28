import {h} from 'preact';
import Style from './style.scss';
import Experience from './Experience';

const Experiences = ({experiences}) => (

	<div class="main__container-experiences">
		<div class="main__tag">Experience</div>
		{experiences.map((experience, i) => {
			if (i === 0) {
				return (<Experience {...experience} tag='main__experience--first'/>);
			}
			return (<Experience {...experience} tag='main__experience'/>);
		})}
	</div>
);

export default Experiences;
