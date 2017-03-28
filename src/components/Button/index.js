import {h} from 'preact';
import Style from './style.scss';

const Button = ({mail}) => (
	<a href={mail} class="info__button">Let's talk</a>
);

export default Button;
