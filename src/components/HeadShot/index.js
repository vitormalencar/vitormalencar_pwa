import {h} from 'preact';
import Style from './style.scss';

const HeadShot = ({webp, png, name}) => (
	<div className='info__headshot'>
		<picture className="info__headshot_img">
			<source srcset={webp} type="image/webp"/>
			<source srcset={png} type="image/png"/>
			<img src={png} alt={name} className="info__headshot_img"/>
		</picture>
	</div>
);

export default HeadShot;
