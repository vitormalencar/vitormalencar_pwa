import {h} from 'preact';
import Style from './style.scss';

const HeadShot = ({avatar, name}) => (
	<div class='info__headshot'>
		<img src={avatar} alt={name} class="info__headshot_img"/>
	</div>
);

export default HeadShot;
