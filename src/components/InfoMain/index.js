import {h} from 'preact';

import Button from '../Button';
import Style from './style.scss';
import HeadShot from '../HeadShot';
import InfoFooter from '../InfoFooter';
import ElevatorText from '../ElevatorText';

import webp from '../../static/avatar/vitor.webp';
import png from '../../static/avatar/vitor.png';

const InfoMain = ({name, role, mail}) => (
	<div className="info-main">
		<HeadShot webp={webp} png={png} name={name}/>
		<ElevatorText name={name} role={role}/>
		<Button mail={mail}/>
	</div>
);

export default InfoMain;
