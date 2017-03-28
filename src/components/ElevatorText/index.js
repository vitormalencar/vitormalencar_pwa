import {h} from 'preact';
import Style from './style.scss';

const ElevatorText = ({name, role}) => (
	<div class='info__elevator'>
		<h1 class='info__elevator_text'>{name}<br/>{role}</h1>
	</div>
);

export default ElevatorText;
