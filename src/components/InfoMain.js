import {h} from 'preact';
import Button from './Button';
import avatar from '../static/avatar/vitor_apcr2b_c_scale,w_432.jpg';

const InfoMain = () => (
	<div class="info-main">
		<div class="info__headshot">
			<picture class="info__headshot-img">
				<img
					src={avatar}
					alt="Vitor Alencar"
					class="info__headshot-img"/></picture>
		</div>
		<br/>
		<div class="info__elevator">
			<h1 class="info__elevator-text">I'm Vitor Alencar<br/>Front-end developer.</h1>
		</div>
		<Button/>
	</div>
);

export default InfoMain;
