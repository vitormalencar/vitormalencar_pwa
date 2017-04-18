import {h} from 'preact';

import Button from '../Button';
import Style from './style.scss';
import HeadShot from '../HeadShot';
import InfoFooter from '../InfoFooter';
import ElevatorText from '../ElevatorText';

import avatar from '../../static/avatar/vitor.webp';

const InfoMain = ({name, role, mail}) => (
	<div class="info-main">
		<HeadShot avatar={avatar} name={name}/>
		<ElevatorText name={name} role={role}/>
		<Button mail={mail}/>
	</div>
);

export default InfoMain;
