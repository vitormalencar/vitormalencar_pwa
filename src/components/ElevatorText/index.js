import {h} from 'preact';
import Style from './style.scss';

const ElevatorText = ({name, role}) => (
	<div className='info__elevator'>
		<h1 className='info__elevator_text'>{name}<br/>{role}</h1>
	</div>
);

export default ElevatorText;
