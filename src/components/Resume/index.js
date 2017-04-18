import {h} from 'preact';
import Style from './style.scss';
const Resume = ({resume}) => (
	<a className='main__resume' target="_blank" rel="noopener" href={resume}>View My Resume</a>
);

export default Resume;
